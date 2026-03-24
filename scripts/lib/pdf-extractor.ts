import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

/** Extract full text from a PDF using pdftotext. */
export function extractPdfText(pdfPath: string): string {
  return execSync(`pdftotext "${pdfPath}" -`, {
    encoding: 'utf-8',
    maxBuffer: 50 * 1024 * 1024,
  })
}

/** Compute SHA-256 hash of a file. */
export function hashFile(filePath: string): string {
  const buf = readFileSync(filePath)
  return createHash('sha256').update(buf).digest('hex')
}
