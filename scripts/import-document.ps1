param(
  [Parameter(Mandatory = $true)][string]$Path
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $Path))
try {
  $entry = $archive.GetEntry('word/document.xml')
  if (-not $entry -or $entry.Length -gt 20MB) { throw 'Documento Word ausente o demasiado grande.' }
  $settings = [System.Xml.XmlReaderSettings]::new()
  $settings.DtdProcessing = [System.Xml.DtdProcessing]::Prohibit
  $settings.XmlResolver = $null
  $stream = $entry.Open()
  $reader = [System.Xml.XmlReader]::Create($stream, $settings)
  $xml = [System.Xml.XmlDocument]::new()
  $xml.XmlResolver = $null
  $xml.Load($reader)
  $reader.Dispose()
  $stream.Dispose()
} finally { $archive.Dispose() }

$ns = [System.Xml.XmlNamespaceManager]::new($xml.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$paragraphs = @($xml.SelectNodes('//w:p', $ns) | ForEach-Object {
  ($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join ''
} | Where-Object { $_.Trim() })
$entries = @()
$sources = @()
$claims = @()
$appendix = $false

for ($i = 0; $i -lt $paragraphs.Count; $i++) {
  $line = $paragraphs[$i]
  $heading = [regex]::Match($line, '^(P([1-6])-([HPSCDM])\d{2})\s*\|\s*(.+?)\s*\|\s*(.+)$')
  if ($heading.Success) {
    $place = [regex]::Match($paragraphs[$i + 1], '^Lugar:\s*(.*?)\s*\u00b7\s*Personas e instituciones:\s*(.+)$')
    if (-not $place.Success -or -not $paragraphs[$i + 2].StartsWith('Relaciones hist')) { throw "Ficha incompleta: $line" }
    $refs = $paragraphs[$i + 3]
    $entries += [ordered]@{
      code = $heading.Groups[1].Value
      period = [int]$heading.Groups[2].Value
      theme = $heading.Groups[3].Value
      yearLabel = $heading.Groups[4].Value
      title = $heading.Groups[5].Value
      location = $place.Groups[1].Value
      actors = $place.Groups[2].Value
      context = ($paragraphs[$i + 2] -replace '^[^:]+:\s*', '')
      relatedCodes = @([regex]::Matches(($refs -split '\u00b7')[0], 'P[1-6]-[HPSCDM]\d{2}') | ForEach-Object { $_.Value } | Select-Object -Unique)
      sourceCodes = @([regex]::Matches($refs, '\[(F\d{2})\]') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique)
      paragraph = $i + 1
    }
  }
  $source = [regex]::Match($line, '^\[(F\d{2})\]\s*(.+?)\.\s*(.*?)\s+Consultar fuente\s+(https?://\S+)\s*$')
  if ($source.Success) {
    $sources += [ordered]@{ code = $source.Groups[1].Value; publisher = $source.Groups[2].Value; title = $source.Groups[3].Value; url = $source.Groups[4].Value }
  }
  if ($line.StartsWith('Ap') -and $line.Contains('Conspiraciones,')) { $appendix = $true }
  if ($line.StartsWith('Bibliograf')) { $appendix = $false }
  if ($appendix -and $line -match '^\d+\.\s+(.+)$') {
    $claims += [ordered]@{
      title = $Matches[1]
      explanation = ($paragraphs[$i + 1] -replace '\s+Fuentes:.*$', '')
      sourceCodes = @([regex]::Matches($paragraphs[$i + 1], '\[(F\d{2})\]') | ForEach-Object { $_.Groups[1].Value })
    }
  }
}

if ($entries.Count -ne 360 -or $sources.Count -ne 50 -or $claims.Count -ne 10) { throw "Importacion incompleta: $($entries.Count) fichas, $($sources.Count) referencias, $($claims.Count) notas." }
$codes = @($entries | ForEach-Object { $_.code })
if (($codes | Select-Object -Unique).Count -ne 360) { throw 'Identificadores de ficha duplicados.' }
$sourceCodes = @($sources | ForEach-Object { $_.code })
if (($sourceCodes | Select-Object -Unique).Count -ne 50) { throw 'Codigos bibliograficos duplicados.' }
foreach ($item in $entries) {
  foreach ($related in $item.relatedCodes) { if ($related -notin $codes) { throw "Cruce inexistente: $related" } }
  foreach ($reference in $item.sourceCodes) { if ($reference -notin $sourceCodes) { throw "Referencia inexistente: $reference" } }
}

$document = [ordered]@{
  metadata = [ordered]@{
    fileName = [System.IO.Path]::GetFileName($Path)
    sha256 = (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToLowerInvariant()
    title = 'Historia de Mexico: 360 acontecimientos y sus conexiones historicas'
    cutoff = '2026-10-29'
    entryCount = $entries.Count
    referenceCount = $sources.Count
    notice = 'Documento de trabajo aportado por el usuario. Importacion no equivale a verificacion editorial; los paralelos no prueban causalidad.'
  }
  entries = $entries
  sources = $sources
  claims = $claims
}
$outputDirectory = Join-Path $PSScriptRoot '..\src\data\imported'
[System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null
$output = Join-Path $outputDirectory 'document.json'
[System.IO.File]::WriteAllText($output, ($document | ConvertTo-Json -Depth 10), [System.Text.UTF8Encoding]::new($false))
[pscustomobject]@{ File = 'src/data/imported/document.json'; Entries = $entries.Count; References = $sources.Count; Appendix = $claims.Count } | ConvertTo-Json
