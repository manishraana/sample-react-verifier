export const amoyv3 = {
    "version": "https://schema.openattestation.com/3.0/schema.json",
    "network": {
      "chain": "MATIC",
      "chainId": "80002"
    },
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
      "https://schemata.openattestation.com/io/tradetrust/bill-of-lading/1.0/bill-of-lading-context.json"
    ],
    "credentialSubject": {
      "shipper": {
        "address": {}
      },
      "consignee": {},
      "notifyParty": {},
      "blNumber": "20240315",
      "scac": "20240315",
      "links": {
        "self": {
          "href": "https://action.openattestation.com?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Ftradetrust-functions.netlify.app%2F.netlify%2Ffunctions%2Fstorage%2F430b1a37-510e-4f38-a27c-444b3c464f83%22%2C%22key%22%3A%2254d6b2b34aea27541c3143988e7f1fc26f0f9f58f215d4915fa1da3a13441d00%22%2C%22permittedActions%22%3A%5B%22STORE%22%5D%2C%22redirect%22%3A%22https%3A%2F%2Fdev.tradetrust.io%2F%22%2C%22chainId%22%3A%2280001%22%7D%7D"
        }
      }
    },
    "openAttestationMetadata": {
      "template": {
        "type": "EMBEDDED_RENDERER",
        "name": "BILL_OF_LADING",
        "url": "https://generic-templates.tradetrust.io"
      },
      "proof": {
        "type": "OpenAttestationProofMethod",
        "method": "TOKEN_REGISTRY",
        "value": "0x0f99945c7ebae71a9a615c422d716fe1eeab2b2e",
        "revocation": {
          "type": "NONE"
        }
      },
      "identityProof": {
        "type": "DNS-TXT",
        "identifier": "verifier-amoy.dev.nghaninn.com"
      }
    },
    "issuanceDate": "2021-12-03T12:19:52Z",
    "expirationDate": "2029-12-03T12:19:52Z",
    "issuer": {
      "id": "https://example.com",
      "name": "DEMO TOKEN REGISTRY",
      "type": "OpenAttestationIssuer"
    },
    "type": [
      "VerifiableCredential",
      "OpenAttestationCredential"
    ],
    "proof": {
      "type": "OpenAttestationMerkleProofSignature2018",
      "proofPurpose": "assertionMethod",
      "targetHash": "c552c365670f15fbb31486b2d96c15b1cc5fd53b6f178f4e7075c156119deed2",
      "proofs": [],
      "merkleRoot": "c552c365670f15fbb31486b2d96c15b1cc5fd53b6f178f4e7075c156119deed2",
      "salts": "W3sidmFsdWUiOiI2N2ZiY2I0ZTEwOTc3MDhjOTBjY2MxMDM3YmE2YTBhZjc1ODA5YjgyZTY0MjNhMDFmMzVjM2UwOTI3NDUzOThjIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiZWI2NzRiOGYyMGQ2YTkwMjAwZjU4M2Q4NGQ1ZGRkY2U0MDE4MzNkMjFjODBjZjJhMTIwYzIxMjUxNGZmYjMxNSIsInBhdGgiOiJuZXR3b3JrLmNoYWluIn0seyJ2YWx1ZSI6ImY3ZmJlMTliM2IxNDFmZGQyMDA3YjFmNDU0ZGEzZjBlZDE2OTM1MTVjZWNjODA5OGI3ODQ2YWFiNTVmNWRjMDIiLCJwYXRoIjoibmV0d29yay5jaGFpbklkIn0seyJ2YWx1ZSI6IjRjN2Y3OWZiZGM1MGEyMGNhNzM0YTVhZGE2YzlhODE2OTE4YjVlNDJkNzljYjZjYjNhYWMyMzFkYzE4NWZkNjUiLCJwYXRoIjoiQGNvbnRleHRbMF0ifSx7InZhbHVlIjoiMjdlNzVlY2I2MjBhMmFhNmY5YmVhYjgwNDJkYmY5ZDU1YjQ1MDM0YTUwYTI5ODIyYzkzMWMyZjAwM2NlZTZiZCIsInBhdGgiOiJAY29udGV4dFsxXSJ9LHsidmFsdWUiOiIyNTBiNjlmZDY0MjQ0Y2RhZTA3MDA4Mjg5NDQ2ZTNhMGI2MDY4ZjRmMTE1YjIyN2YxZTIxZjhiMWM4YTJjOGZlIiwicGF0aCI6IkBjb250ZXh0WzJdIn0seyJ2YWx1ZSI6ImI1NjRmYTY3Mzg2OGYwZTE2ZTY5ZWMxZjA2Y2UzOThhMzZkNmRlMTFhZjNlYjExYmM3MTRiMzQ1YmQzYmMzZDAiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmxOdW1iZXIifSx7InZhbHVlIjoiNzY5MTRhNTk2MGEzOTFhOTI3M2M4ZGMxYjQ4M2VkNWFkN2Q1NDRjOGIxZGE3NzM1MmRkYzM1NzFhNTRmZTFkYSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5zY2FjIn0seyJ2YWx1ZSI6IjgxZmY5NzZhZThjMjdjY2Q2MmE2NTM3MmZmYzVkMmQ4NzUzMmJlNzExYWY4ZGEyOTE5MmUyYTgxMGY5ODNiZWMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QubGlua3Muc2VsZi5ocmVmIn0seyJ2YWx1ZSI6ImFkZjYwMTBlNGQxNTQ3ZDA4NWM1NTkwZDU3NTQ5Y2RhZjI0ZjAzNTM0NzU5NGI0NDUxYjgzOTQ0MmNmODkwYTciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUudHlwZSJ9LHsidmFsdWUiOiJmZTY3YWQxYTRmZDNhNTg1YjVjODMyYzUzMmEwODllZDNlYjFlYTYxMDcwODdkZjMwZGJhMzkwZDMyMTE4NzU0IiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLm5hbWUifSx7InZhbHVlIjoiZmViMjkzMzA4NTUzMDQ3MDgxMGY4MzlkMTdkMDAyOGMyYWRjNDlkNzQ5ODkwNzkyMWRhNTNlMWNhMjEwYzM0YSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiMmQ3N2I4MzQ4ODk2OTk0Mzg3NjdmYzExM2M2MWY2MzFiY2MzYzM4MWFjMjcxMWY4ZWMyMWViYjBlYTcyZDIxZiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6ImRjZGNkZDNkMDU1ZGQ3NTMxZTFmNmEzMWNhYWIyNWYwODY1OWYwY2M3OTE4OTNkMmYzNTAzY2Y3ZjNjZTBhYjUiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImUyODBlNDk5ZWFkOWM4MjI5NWZmNmYzNTNhYTI3Nzc4ODQ5NjQ1ODcxNzQwNDQ0MmE0NDI4ZTdhYzRiZThiY2EiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiNzFiNzEyYTlmYjRhMzAwNjMwZTFjNDMyYjliMzE2MjIwMjM5MTFhYWNmN2U1Y2M5ZTNjNjgyZTMxNjJiMzBmOCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi5yZXZvY2F0aW9uLnR5cGUifSx7InZhbHVlIjoiNGMyNWM1MWU4ZTEwMWZiYjBmMTJjYWZkYjMyYzk4YTNiN2E3NzU5YTIwN2JmNDE3YjNhMTc0MGMzNjlkYjRlMSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiYWNhYjM5YTYwZGZmOWU4MzdkMjNmMzYwNDA1ZGY3OTljOGJjNzQ5MjJmMjUwN2UwODcxOTNjNjNmYWU1MDA1YSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiZmExYjcxNjVlYzcwZTE4ZGU5NGJjODY2OWQxNjJiOTRmMmU4MDA5NWM1ZTI0MTI1ZmY2MmU5MjFkMDViM2FhYSIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiMTVkMGMwMTM4ZmQzZTc1MzMwOWE3M2ZlYmMzZTVjYWI2YzM3NzA5NWM0ZTE3MTRmZDU3NzY3ZWRlMTNhNDQ1YiIsInBhdGgiOiJleHBpcmF0aW9uRGF0ZSJ9LHsidmFsdWUiOiJmZWQ4Y2JlMTJlYTNhNDgxMjMxOWI1OGRjOTc5MTk2YjhhZTUxM2ZmZjE3MGFlN2FhMThkOGI3Mzc2MGRjYThkIiwicGF0aCI6Imlzc3Vlci5pZCJ9LHsidmFsdWUiOiI0N2E3NjZmOGM5NTRjMzY4OWQxNjQ1NjUwNDdlZDRiYmEzNGJkMDNhMDFlMjdlNWQzNmMwZjMyM2JiM2YzM2FhIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6Ijg3ZTJhMGI4MGU4ZTdjYzBiYjg4MGM5MzM3YzIwNWFlMGU5ZWY3ZmJlNzYzZjFlZDQ3MWM5OWZmMDUwNWRiOWYiLCJwYXRoIjoiaXNzdWVyLnR5cGUifSx7InZhbHVlIjoiNDQ0MTFmNTQ4MTNkOTJkZTE0OGNlMTY0ODc1NTVkNzZkOGIyODcyNTIwMjVhMjEyNDg4NTk0ZDJmNjM4ZjcyZCIsInBhdGgiOiJ0eXBlWzBdIn0seyJ2YWx1ZSI6Ijg5MGZhNmE3NTAxODZlMTQzOWE2NjJiNjg2MzVlOGE1YzY1MTZiMjc1ZWYxODllNWJmNDZkMmE1YzYwZGJkZDEiLCJwYXRoIjoidHlwZVsxXSJ9XQ==",
      "privacy": {
        "obfuscated": []
      }
    }
  }

export const sepoliav3 = {
    "version": "https://schema.openattestation.com/3.0/schema.json",
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json",
        "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
        "https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json"
    ],
    "reference": "SERIAL_NUMBER_123",
    "name": "Republic of Singapore Driving Licence",
    "issuanceDate": "2010-01-01T19:23:24Z",
    "validFrom": "2010-01-01T19:23:24Z",
    "issuer": {
        "id": "https://example.com",
        "type": "OpenAttestationIssuer",
        "name": "DEMO STORE"
    },
    "type": ["VerifiableCredential", "DrivingLicenceCredential", "OpenAttestationCredential"],
    "credentialSubject": {
        "id": "did:example:SERIAL_NUMBER_123",
        "class": [
            {
                "type": "3",
                "effectiveDate": "2010-01-01T19:23:24Z"
            },
            {
                "type": "3A",
                "effectiveDate": "2010-01-01T19:23:24Z"
            }
        ]
    },
    "openAttestationMetadata": {
        "template": {
            "name": "CUSTOM_TEMPLATE",
            "type": "EMBEDDED_RENDERER",
            "url": "https://localhost:3000/renderer"
        },
        "proof": {
            "type": "OpenAttestationProofMethod",
            "method": "TOKEN_REGISTRY",
            "value": "0x142Ca30e3b78A840a82192529cA047ED759a6F7e"
        },
        "identityProof": {
            "type": "DNS-TXT",
            "identifier": "example.tradetrust.io"
        }
    },
    "attachments": [
        {
            "fileName": "sample.pdf",
            "mimeType": "application/pdf",
            "data": "BASE64_ENCODED_FILE"
        }
    ],
    "proof": {
        "type": "OpenAttestationMerkleProofSignature2018",
        "proofPurpose": "assertionMethod",
        "targetHash": "45f8d980262851107f5d69a88f34c1edbeea93b2df7b594db3dddcf461241010",
        "proofs": [],
        "merkleRoot": "45f8d980262851107f5d69a88f34c1edbeea93b2df7b594db3dddcf461241010",
        "salts": "W3sidmFsdWUiOiJlYThhMmU2ODE2YTZhZGMyZGRhYzM0YmFkYTUxYTU5NzM3MWExYWM4OWNiNjgyOGViYmY2YmI3ZGJmNzg4MDYwIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiM2Q4MGQ1ZWZlY2I3YjIxMmM2Y2JiNTEwZTk1YzFkMGI5OWQ1OTU4M2NkNjkyNmZjYjMyZTcxMzkzOWFiNGI2MSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI4NWQ3NDdlMGZhYTZlMzQ5MjZkNmZiMzkwNjIyMjdhNjIxMGRlZDhmNGRiMDQwOWQ2ODFkNDJhZTI1YjFkYWJiIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6Ijc1MGM3M2U3M2E3YjFjZGRjYmZkNTUxZTUzN2RhOGI5NmZkODAyYTdkYWU4OTZhZWY1ODY5OGFhZGJkY2VkNWQiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiN2QxZTE1NDgwNWM0ZWI4NGQ1NzA0MGVkZTgxY2E1ODE2OThhOGE4Zjk5Njc1MTNiOTQzMjE1ZTUyOGE2OTA5ZSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiJjYjA0NWVhODliOWQ2ODZkMzBkZmI0NDczNThkYTRhZDdjYWNjZTI0Y2I5YzY3YTYwY2U2NWE1OTg2NTQyMWZmIiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI3NTliMTcwYmJkYzAwMjdlNDU5M2NlZDU3Nzc0NjA4YmE1ZDA5Yzc5ZTkzMzJmN2IyZDI2ODMwNDU0YTMxY2YzIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiY2Q0ZWVkYTcyZGYzYWIzNTE3ZDJkYWJhNTY3YTQ3NTk4YTMxNTIwNGQwZGY1M2U1NGMxNmIyN2NmYWE5NjI3ZCIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiYWIyYWM2NzgxNmI0NTRlMDgyOWUzYTU1NjJjNjliMGJkYzU0ZjgwODZlOTk3ZDdiNGFiMTU1MWI4Y2NkOGM5MSIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiZGM4ODg5MDFiMjEyZGMxOWE3MDQyNWY2N2Q1ZTI4YzlhYzgxNWJmNzlhOWFhMzU1ZDRjMTkzZDdkNjdmODdjYSIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiZTg2YzRhYWU1MTgyODNhYjkxYTBkNmQ0M2EwYTAyOWExZjhjNjQ2YWRkYTMxNzBiNzM5ZGY4MWU2ZjAxMWZlNSIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiI2ZTQyOGUzMGUwNzZhN2M5ZjMyYjhkZGRlZGU0Yjc1MjRiZDUzZDIwYjdlNmQyODYyZTA3Nzc4YTRkNDM0NDg5IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjJlY2ZlMjFlMDYyNDEwYmRmMDQxYjk3N2IzZGJjMmQ1NGFkM2U3MjUwMDU1ZGMyZmJmM2MwYzVjNThhYjJhZTciLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiJjMDRiZGFiZTgxZTNjM2UyYzgzMmI3MjhlMjA5Yjg0Nzc2ZjYyNTViZTBhNmNkNzQwYTg3NGE3NmMzZDA4ZmFmIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiZjBjZjE5YTFjZGE3NDQ4ZjZmMzNlM2ZhOTcxNDU0ZGVmYTYzMzFjZmIzYTY5YzliZDY4ZmQyYjk5MzExMWQ0YSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjBiNzJhYzhkZmE5NzQ0MWI5NjkxZDVkMzA3MmVmN2VjNzgwODJhOTM4ZDRjYzU1ZDE5MTFiMmQ1NDcyNDc3MDciLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiZjU4NDMyOGZmNWViODBmYTY2NGM1OWVlOGM5MmZiY2U2NDdlYmYwNzk5MWEwMzkyNWNkZjk5YzBlN2ZkODQzMiIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6Ijc4MzcwNjBiMGYyZjViYmUxZjk5N2MwNzExNTc5OWI4Zjk2ZWVjZDhlN2NlODliNjU3NzY5YjQ1ZTI1OTFmNjMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiIyY2I3YWY3OTUxYzI3YmZjOGRiZWM0ZGY3NjViYzRkMjgzN2UyNjdlZTAwZGQ3YTBmMjFhYjIzNmE4MGQ0M2VmIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiZWI1YzU5ZGVkNmZmOTJkMGRiYmI0ODljYjM4MjgxNmNjYmU4ODA5ODNhNDliNjE4MzJjODZjZGQ5MThiMTJlNSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6IjA0N2ZkZmM0MjcwOTFlZTJmMjI0M2ExOGRmZmM4Nzg4ODEzM2ViMjVhNjFkOWMzMzlhNTk3YTE0YjMxYTEzNjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiJlMjlkM2I3MjUzMjJiZTlkYjhlMTY2NzY5NTJlNTMwNmVmNDI5NjM1YTQwNzAzZWJlNmQxZjJhMjEyY2ViODBiIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiM2Q5NDFmZDA3NmFiOGRiNmQ1ZWEyMmU2MGY3MGNmODZiNjU3MDNjNDFiN2MzMWU4NDNkMjU3Y2EwZjdkYTgwOCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZjI0NGNjOWEwZWVjNDZkNzdlNjg0NzFhOWQzN2Q4MjQyYmU2MjFiNmRjYTllYWRiNDhjNzA4Y2NlMDYwNmEzNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjFiNTFjZjI2NWNkODhiNzJmNjBkODAzZTkxMGY2MDdkZTgxZWIyNTMyYzlmMjk3YzFmMWNlNzVhMWM4YWMyYTEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImFhMzAwYTA2OTMwMTg3MjYzOWQ2YmY1MTFkZmJkNDBhMmRlOTZmNzU5ZDhmYzBiYzJjZGZhNmFmMzZhYzE4MzAiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiODA1YjcyNjc0MGFmMGE5NTY4MmU2MzFmNDUzZTA5MjBiMWU3ZWU3NjJmODE2M2IxMzU0YTMwODQ2NGNkOWQxYSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNzY3Yzg0YjE1YjhkOTdkNzMwZTQ0OTMyMTZjNmU1ZmZkZmU0NDA3NjE3MDNmMmVlNDYwNWNhOTIyZDBjZjQyZCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiMzAyY2YxYWJjNGEwMGEzMWQyZDJkYmRkNWY4ZjA3N2ZhMjNhZjllZGViMGM2OTAzOTRjMTdmYTBiMjQ2ZmYzOCIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiI2NjQ5NTNiMzk0NDIxZDVjY2FiY2YyMTRhZjZlZTBkNjdlMDA4YjVmYmQ2YTU2MWI0YTkyZTgyMzA1MDRhOGIzIiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6IjY5NzE4YzE5MzlmMzljYWY1MzI0NzQ3MzFjZjhhMDlmMDg4OTRiYWIyNWM0YmU1N2VjZjBkOWQ4NmE5N2VlOWQiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==",
        "privacy": {
            "obfuscated": []
        }
    }
}

export const stabilityv2 = {
    "version": "https://schema.openattestation.com/2.0/schema.json",
    "data": {
      "$template": {
        "type": "b40e085f-bf80-44c2-b264-6112897a3bad:string:EMBEDDED_RENDERER",
        "name": "e237ae40-3167-4144-b9c9-fd9dd3c8263b:string:BILL_OF_LADING",
        "url": "f7c6cebc-2608-4d78-9593-69b66b05e7ca:string:https://blkp-doc-rendr.netlify.app/"
      },
      "network": {
            "chain": "949805b6-e2d5-4979-8819-e0f1b8022e94:string:FREE",
            "chainId": "33543d64-8073-4d14-8e68-00e770cdf04d:string:20180427"
        },
      "issuers": [
        {
          "name": "bdb2bbae-a329-4eae-b08f-4b02d88ae224:string:Blockpeer Finance",
          "tokenRegistry": "99f94512-bda9-493d-93e1-fd575481fdc3:string:0x7090985Ad3965b0181eEa03ba872471755880bFB",
          "identityProof": {
            "type": "b8ffd453-0bf4-479c-a9a2-f94c3d5b634a:string:DNS-TXT",
            "location": "3cd7430c-5096-4051-bbea-667b987611dd:string:mebl-stability-local.blockpeer.finance"
          }
        }
      ],
      "carrierName": "ba9979fe-bf55-47ce-8f43-471b689a21e9:string:Sed quis corrupti v",
      "companyName": "93446709-6c08-4716-834d-5f59dbef313d:string:WorkDo",
      "logo": "7dcfe8fa-8d5d-46c7-959f-6e73fafad3c9:string:http://localhost/bp-laravel/public/uploads/logo/logo_dark.png",
      "blNumber": "1989fc19-c9fc-4cf9-a376-b84996b7e76e:string:Ut et ea fugit pers",
      "scac": "bc690245-e590-445a-9940-c68b6631a63c:string:Laudantium aut elit",
      "shipper": {
        "name": "614d152e-25c0-4984-83bb-4b61ec9c979f:string:Cole Allison",
        "address": {
          "street": "03459660-5574-4637-b543-126c7ef6588b:string:Fugiat aut totam co",
          "country": "1deed634-8814-4243-8a6f-a9554f8cf8ae:string:Molestias qui qui in"
        }
      },
      "consignee": {
        "name": "5235f6ca-1ecd-471e-91f9-0a6eb633e3ff:string:Sed quis corrupti v"
      },
      "notifyParty": {
        "name": "7a0c34c3-c993-4070-bf8a-8b1b519d75ee:string:Ut officia voluptate"
      },
      "vessel": "2df8b966-7779-46d8-b9fc-586fc1e2f6dc:string:Voluptatem in non s",
      "voyageNo": "174ec714-341f-40ab-ac3b-ee3561fe4ccf:string:Magna nihil doloribu",
      "portOfLoading": "5794a163-85d5-46e7-ad50-65351b2b0a3e:string:Totam laborum Ut ab",
      "portOfDischarge": "7344b39c-8393-479c-8405-c23c84e681ec:string:Omnis non officia es",
      "placeOfReceipt": "d84751af-25be-469e-9337-aebd5346bcec:string:Porro sit voluptatem",
      "placeOfDelivery": "bcc4a3b4-19b5-4ad5-8abf-91604690329d:string:Quod vel tempora exe",
      "packages": [
        {
          "description": "949f86fd-a915-41f8-bdde-6957189d897c:string:Distinctio Quam cum",
          "weight": "8f28b4f8-99ba-44fd-9401-a3fd1b9700c1:string:Officia ipsum modi",
          "measurement": "2a39a13e-d5a9-4877-8838-db0204cd91b6:string:Eveniet irure dolor"
        }
      ],
      "links": {
        "self": {
          "href": "025e2499-9ca4-4de6-9783-c574c96d3160:string:https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D"
        }
      }
    },
    "signature": {
      "type": "SHA3MerkleProof",
      "targetHash": "64f7aec322cd6bf5683a222e97b4d7fa657d8260fbcb22fc0887034231b6c179",
      "proof": [],
      "merkleRoot": "64f7aec322cd6bf5683a222e97b4d7fa657d8260fbcb22fc0887034231b6c179"
    }
  }

export const stabilitytestv2 = {
  "version": "https://schema.openattestation.com/2.0/schema.json",
  "data": {
    "$template": {
      "type": "2d5d7d4b-f0c7-418b-82a5-d91647bca83d:string:EMBEDDED_RENDERER",
      "name": "11350357-119f-490b-a503-ab1b11d18678:string:BILL_OF_LADING",
      "url": "544babb8-ab42-4310-8a65-3f36e4d0d1e1:string:https://blkp-doc-rendr.netlify.app/"
    },
    "network": {
      "chain": "712b0aea-77e0-4343-8bbf-1ab1dab55e1c:string:Global Trust Network",
      "chainId": "946eb2ad-8f79-413e-a42e-9d99929a4004:string:101010"
    },
    "issuers": [
      {
        "name": "9aabbc21-0c7d-48d8-ba6b-7793ebda0d97:string:Blockpeer Finance",
        "tokenRegistry": "b111c943-cca5-439a-a715-bbb3ce75ae35:string:0x109b9cb25be1F9Ce085d22CDA66171c97927d489",
        "identityProof": {
          "type": "f0c27198-f8a7-46f0-af38-4475d9fa76cf:string:DNS-TXT",
          "location": "6c03e6bf-13a4-4b0f-b417-5b1f756f1c65:string:mkebl-stability-local4.blockpeer.finance"
        }
      }
    ],
    "carrierName": "d03ecfbb-1ccb-4f5b-a7f7-0a41bb7373b8:string:Eiusmod excepturi de",
    "companyName": "2c1a0f56-cb41-46f9-aa36-75614ebb605c:string:WorkDo",
    "logo": "2d2b1ce0-8d69-452b-827d-36608990c5f3:string:http://localhost/bp-laravel/uploads/logo/logo_dark.png",
    "blNumber": "250a4f15-89fe-44e7-b3ef-a12ae63a7be0:string:Nam modi ipsam ut am",
    "scac": "1c924f67-3925-4062-b525-3a6f985904f0:string:Adipisicing ea debit",
    "shipper": {
      "name": "1aafff78-172e-4847-893f-d2d8b11d136a:string:Shaeleigh Heath",
      "address": {
        "street": "b839f055-19c7-46d5-a86f-3221b5272a28:string:Sit ipsum quidem do",
        "country": "16bfd98e-e182-40e5-96ef-453d2a3df204:string:Aut ullam odio fugit"
      }
    },
    "consignee": {
      "name": "2f390935-9b7c-443d-b446-515645548fde:string:Eiusmod excepturi de"
    },
    "notifyParty": {
      "name": "71353a05-3aba-464c-a16b-d11cdcceca46:string:Fugit harum elit v"
    },
    "vessel": "f41c20fe-d76c-4461-9b4d-fa5b71e46602:string:Facilis dolores odio",
    "voyageNo": "532b7f04-dd24-47d1-8403-c903f4bb2656:string:Sit voluptate natus",
    "portOfLoading": "587580ff-a6b8-4ab8-a8f6-cc42f96904cd:string:Voluptas soluta temp",
    "portOfDischarge": "d140a662-1c72-473e-9357-4e9aca7f7355:string:Vitae placeat dolor",
    "placeOfReceipt": "6ef6d367-52bc-4e58-97d2-003bf4d98a27:string:Quo iure soluta reru",
    "placeOfDelivery": "4706652b-479f-4345-a1a0-a1e0e6219f98:string:Aliquid ut in est es",
    "packages": [
      {
        "description": "2b848b19-7ab5-4fdc-9feb-691cc288cea8:string:Non amet deleniti p",
        "weight": "9d095f66-2298-42be-8dca-c2c8dee39d0c:string:Veniam iure volupta",
        "measurement": "022ddb9b-b06d-4122-b711-9e25feed4bc4:string:Et natus non est qui"
      }
    ],
    "links": {
      "self": {
        "href": "81747075-3d3f-49a6-8217-18d8f0eeeb4a:string:https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D"
      }
    }
  },
  "signature": {
    "type": "SHA3MerkleProof",
    "targetHash": "3273cdfde35fc7845875fa39b53b79a88a758feba4e13e844cfb73ca25abe0cc",
    "proof": [],
    "merkleRoot": "3273cdfde35fc7845875fa39b53b79a88a758feba4e13e844cfb73ca25abe0cc"
  }
}