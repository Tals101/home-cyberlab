# HashVault Configuration Notes

## Overview
This document describes the configuration, design decisions, and behavior of the HashVault file integrity tool.

## Hashing Algorithm
- SHA-256 is used for file fingerprinting
- Chosen for strong collision resistance and wide availability

## Encryption
- OpenSSL AES-256-CBC is used to encrypt manifest files
- PBKDF2 is used for key derivation
- Ensures manifest data cannot be easily read or modified

## File Scanning
- Supports both single file and directory input
- Uses `find` for recursive scanning of directories

## Manifest Behavior
- Manifest stores:
  - Timestamp
  - Target path
  - File hashes
- Manifest is encrypted after creation
- Temporary decrypted manifest is deleted after verification

## Verification Process
- Decrypt manifest
- Recalculate hashes
- Compare using `sha256sum -c`
- Output results to terminal and report file

## Dependencies
- bash
- sha256sum
- openssl
- find

## Security Considerations
- Prevents overwriting existing manifests
- Removes plaintext manifest after encryption
- Removes decrypted manifest after verification

## Limitations
- Does not detect newly added files
- No real-time monitoring
- No centralized logging
