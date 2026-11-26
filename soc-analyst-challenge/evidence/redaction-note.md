# Evidence Redaction Note

On November 26, 2026, three screenshots in this lab were redacted before the repository was shared publicly. Each one showed the local Windows account name in a PowerShell prompt or file path. The account name was covered with the terminal background colour; nothing else in the images changed.

Because the screenshots changed, their entries in [`evidence-hashes.txt`](evidence-hashes.txt) were updated to the new SHA-256 values. The original values are recorded below so the change can be traced.

| Screenshot | Original SHA-256 | SHA-256 after redaction |
|---|---|---|
| `Screenshot 2026-06-30 133659.png` | `1DC168B184FD9780681B72CC14BECE78767B51A83FFCE9E6535856436DE234AC` | `CBD19170A64560B9DA3EB03312FFDCEBB364D4CADE4EB7EA1AC3D985D32CAEC5` |
| `Screenshot 2026-06-30 133737.png` | `9C21080D7BD292A166C85598DBADB52CC82BD77608C01ED0B8A698BD9C581FC8` | `A703180B55FE098D7F4FC2AE14E45F9C1898B15DC92F251077305606BFD6FC06` |
| `Screenshot 2026-06-30 133927.png` | `A23EB78500659D30BB013E5A0F7CFEB798531C3DB2ACFDFA049F23D31C54F814` | `921433AA205722920300B91C6EA36E3B3B3BE70A0D8BA5FEF5D50E1A5C69A0F2` |

The account name in the text of `evidence-hashes.txt` itself was replaced with `[REDACTED-ACCOUNT]` on November 25, 2026. No other evidence files listed in it were changed.

Integrity check at the time of this change: 10 of the 20 hashes in `evidence-hashes.txt` match files in this folder, both before and after the redaction. The other 10 entries did not match any file in the repository before this change either; they appear to refer to files that were never committed or were changed earlier. This redaction did not affect them.
