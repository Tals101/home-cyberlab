Cloud Security Operator Lab - Investigation Timeline
====================================================

Account ID: 513962983534
Region: us-east-1
Trail Name: cloud-security-operator-trail

Key Events Investigated:
- AssumeRole
- ListUsers
- ListRoles
- ListBuckets
- DescribeTrails

Timeline Summary:

--- Source Evidence: step-22-cloudtrail-assume-role-events.json ---
- Time: 2026-06-29T10:24:43-04:00
  Event Name: AssumeRole
  Username: cloud-security-lab-cli
  Event ID: 5e79a850-b031-4568-be3f-cc81f063df39

- Time: 2026-06-29T10:12:17-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 0b2b6315-7fad-3fd7-9c16-759935e9a913

- Time: 2026-06-29T10:09:06-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: e9c1d12e-79a6-384c-888e-ae05ed73de0f

- Time: 2026-06-29T10:06:53-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: ac895fe1-cae1-3ce7-8213-7f030b2577f5

- Time: 2026-06-29T10:05:57-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 041715af-0188-3dd8-b0f7-875872d60838

- Time: 2026-06-29T10:00:30-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 978110a0-a690-3933-81d2-124736a81c8b

- Time: 2026-06-29T09:58:42-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 4e9decc0-95f0-3318-99b9-98790674bfe4

- Time: 2026-06-29T09:48:30-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 20dadbcc-c166-3832-9563-48739320f93a

- Time: 2026-06-29T09:48:27-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 37adaac7-2dda-3b2c-a20b-3b1f17abafc0

- Time: 2026-06-29T09:41:29-04:00
  Event Name: AssumeRole
  Username: 
  Event ID: 5b1bd097-8f0a-3e05-9b8d-a087231d8a21


--- Source Evidence: step-23-cloudtrail-list-users-events.json ---
- Time: 2026-06-29T09:58:48-04:00
  Event Name: ListUsers
  Username: root
  Event ID: da78d891-780a-448e-8dcc-114e67c98b4e

- Time: 2026-06-29T09:57:19-04:00
  Event Name: ListUsers
  Username: root
  Event ID: 97c3f979-19f1-4d5e-aaf2-8d777186d5f0

- Time: 2026-06-29T09:45:43-04:00
  Event Name: ListUsers
  Username: root
  Event ID: 2afda42e-a1a5-4f46-bdc4-f87386ac5a34

- Time: 2026-06-29T09:45:34-04:00
  Event Name: ListUsers
  Username: root
  Event ID: 8de83315-4b89-4ddc-ab68-d813919dc75d

- Time: 2026-06-29T09:45:06-04:00
  Event Name: ListUsers
  Username: root
  Event ID: 004e98ba-c2a2-4952-9196-221c483eb135

- Time: 2026-06-28T21:48:32-04:00
  Event Name: ListUsers
  Username: resource-explorer-2
  Event ID: cbdd1d81-5c6c-4ff0-b633-100948894e7d

- Time: 2026-06-24T02:40:09-04:00
  Event Name: ListUsers
  Username: resource-explorer-2
  Event ID: 32d4daec-d4e5-47a3-9c9a-05ad16124de6

- Time: 2026-06-23T12:15:00-04:00
  Event Name: ListUsers
  Username: resource-explorer-2
  Event ID: bc73f6df-3714-4b96-9afc-36991a2f9bd0

- Time: 2026-04-22T16:37:01-04:00
  Event Name: ListUsers
  Username: resource-explorer-2
  Event ID: a5f7b0f2-0bfb-4192-b81d-5b8038cf43c1

- Time: 2026-04-20T06:07:57-04:00
  Event Name: ListUsers
  Username: resource-explorer-2
  Event ID: ec148e65-f954-421f-961b-6e08d0ef7f72


--- Source Evidence: step-24-cloudtrail-list-roles-events.json ---
- Time: 2026-06-29T10:23:03-04:00
  Event Name: ListRoles
  Username: root
  Event ID: 5b00ec16-8e07-438b-8b13-93f721d0850b

- Time: 2026-06-29T09:55:18-04:00
  Event Name: ListRoles
  Username: root
  Event ID: 33acf2d8-f454-40d9-ab75-dc361b7af7f7

- Time: 2026-06-29T09:46:04-04:00
  Event Name: ListRoles
  Username: root
  Event ID: c8a36580-a45a-4a7a-8167-dff3298af9b8

- Time: 2026-06-24T19:01:51-04:00
  Event Name: ListRoles
  Username: resource-explorer-2
  Event ID: 44035df2-5d1b-4bcf-b9e3-a8bfec861756

- Time: 2026-06-23T11:34:32-04:00
  Event Name: ListRoles
  Username: resource-explorer-2
  Event ID: b204241a-0889-4a3f-8bc7-7060a54653a7

- Time: 2026-04-22T18:22:39-04:00
  Event Name: ListRoles
  Username: resource-explorer-2
  Event ID: 30792e52-4aba-436c-8d66-8d88f05bb28d

- Time: 2026-04-19T13:56:40-04:00
  Event Name: ListRoles
  Username: root
  Event ID: 5c140283-b129-45f1-9735-c9eabb985004

- Time: 2026-04-19T13:25:07-04:00
  Event Name: ListRoles
  Username: root
  Event ID: 49a13059-5f68-4100-a65d-2be1e52db023

- Time: 2026-04-17T18:22:39-04:00
  Event Name: ListRoles
  Username: resource-explorer-2
  Event ID: 0eaeee18-0a61-430e-8d19-430506e13445

- Time: 2026-04-12T18:22:39-04:00
  Event Name: ListRoles
  Username: resource-explorer-2
  Event ID: 72684cdc-7797-4a04-8dfd-22dff8c62fdb


--- Source Evidence: step-25-cloudtrail-list-buckets-events.json ---
- Time: 2026-06-29T10:26:35-04:00
  Event Name: ListBuckets
  Username: CloudSecLab-AttackerSimulation
  Event ID: ae746ce0-0734-4da0-a81e-e42a602c1743

- Time: 2026-06-28T11:04:42-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: 462b750d-f602-4543-b1e3-ee14c2e22f95

- Time: 2026-06-24T02:40:16-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: 0d4de6a3-711c-415e-b8db-ff66c29d09dc

- Time: 2026-06-23T11:41:50-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: 0b2730d2-95c7-440e-ba5a-f5235b9230d5

- Time: 2026-04-23T03:42:56-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: eae282b0-2355-4eb8-b520-edd7c13838ed

- Time: 2026-04-21T17:01:30-04:00
  Event Name: ListBuckets
  Username: root
  Event ID: 676b004c-9caa-4b12-aaed-ad5a6a47d045

- Time: 2026-04-19T13:52:08-04:00
  Event Name: ListBuckets
  Username: root
  Event ID: 3c63cab0-3be7-4d4c-8b16-e2101b700cb3

- Time: 2026-04-19T13:34:25-04:00
  Event Name: ListBuckets
  Username: root
  Event ID: 89ae3490-6b40-447a-8b6a-83166cefb188

- Time: 2026-04-17T03:42:52-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: 0b7a7175-9551-4d17-b2ab-59d5349eb51b

- Time: 2026-04-11T21:23:53-04:00
  Event Name: ListBuckets
  Username: resource-explorer-2
  Event ID: 6fc038c9-8dc2-4181-8777-4fa5df1fc1f4


--- Source Evidence: step-26-cloudtrail-describe-trails-events.json ---
- Time: 2026-06-29T10:26:38-04:00
  Event Name: DescribeTrails
  Username: CloudSecLab-AttackerSimulation
  Event ID: f7cb97f0-50cf-4620-a033-76f21cf089ba

- Time: 2026-06-29T10:09:06-04:00
  Event Name: DescribeTrails
  Username: resource-explorer-2
  Event ID: 281d0a22-defc-4f3e-97a5-5c886712c8ea

- Time: 2026-06-29T10:06:43-04:00
  Event Name: DescribeTrails
  Username: cloud-security-lab-cli
  Event ID: f32f9f78-ae9d-454b-8947-7a95d2c280e0

- Time: 2026-06-29T09:47:04-04:00
  Event Name: DescribeTrails
  Username: root
  Event ID: 82830239-796e-40fd-9ce7-7f27259392ab

- Time: 2026-06-29T09:46:58-04:00
  Event Name: DescribeTrails
  Username: root
  Event ID: b9b1a475-8b8e-4f29-9bd8-61180d8f5cba

- Time: 2026-06-29T09:46:58-04:00
  Event Name: DescribeTrails
  Username: root
  Event ID: eac2b935-790e-4381-adf4-f0ca39ec620f

- Time: 2026-06-24T12:32:20-04:00
  Event Name: DescribeTrails
  Username: resource-explorer-2
  Event ID: 0632869f-0a14-4158-8d30-7725076b6967

- Time: 2026-06-24T12:32:19-04:00
  Event Name: DescribeTrails
  Username: resource-explorer-2
  Event ID: 59e0b299-fb0f-4b13-aaeb-acf48e8109a8

- Time: 2026-06-23T11:56:43-04:00
  Event Name: DescribeTrails
  Username: resource-explorer-2
  Event ID: 22c39f1a-199b-4a31-aae4-b0b7e899bc07

- Time: 2026-06-23T11:56:42-04:00
  Event Name: DescribeTrails
  Username: resource-explorer-2
  Event ID: 123a3fb2-2601-4cf2-b00d-4ee30db24fda

