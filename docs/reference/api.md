---
sidebar_position: 1
---

# API Reference

SiteReports offers a comprehensive API that allows you to integrate our reporting capabilities into your own applications and workflows.

## Authentication

All API requests require authentication using an API key.

### Obtaining an API Key

1. Log in to your SiteReports account
2. Go to "Settings" > "API Access"
3. Click "Generate New API Key"
4. Name your key (e.g., "Development", "Production")
5. Set permissions for the key
6. Click "Create Key"

### Using Your API Key

Include your API key in the header of all requests:

```http
Authorization: Bearer YOUR_API_KEY
```

## Base URL

All API endpoints are relative to:

```
https://api.sitereports.live/v1
```

## Endpoints

### Projects

#### List Projects

```http
GET /projects
```

Returns a list of all projects associated with your account.

**Query Parameters:**
- `limit` (optional): Number of projects to return (default: 20, max: 100)
- `offset` (optional): Pagination offset (default: 0)
- `status` (optional): Filter by status (active, completed, archived)

**Example Response:**
```json
{
  "projects": [
    {
      "id": "proj_123456",
      "name": "AV Installation - Corporate HQ",
      "client": "Acme Corporation",
      "status": "active",
      "created_at": "2025-01-15T14:23:45Z",
      "start_date": "2025-01-20T00:00:00Z",
      "end_date": "2025-03-15T00:00:00Z"
    },
    {
      "id": "proj_123457",
      "name": "Conference Room Upgrade",
      "client": "TechFirm Inc",
      "status": "active",
      "created_at": "2025-01-15T15:01:22Z",
      "start_date": "2025-02-01T00:00:00Z",
      "end_date": "2025-02-15T00:00:00Z"
    }
  ],
  "total": 42,
  "limit": 20,
  "offset": 0
}
```

#### Get Project Details

```http
GET /projects/{project_id}
```

Returns detailed information about a specific project.

**Example Response:**
```json
{
  "id": "proj_123456",
  "name": "AV Installation - Corporate HQ",
  "client": "Acme Corporation",
  "address": "123 Main St, New York, NY 10001",
  "status": "active",
  "created_at": "2025-01-15T14:23:45Z",
  "start_date": "2025-01-20T00:00:00Z",
  "end_date": "2025-03-15T00:00:00Z",
  "description": "Complete AV system installation for new corporate headquarters",
  "modules": ["team", "assets", "tasks", "files", "reports"],
  "team": [
    {
      "id": "usr_789012",
      "name": "John Smith",
      "email": "john@example.com",
      "role": "Project Manager"
    },
    {
      "id": "usr_789013",
      "name": "Sarah Johnson",
      "email": "sarah@example.com",
      "role": "Technician"
    }
  ]
}
```

#### Create a New Project

```http
POST /projects
```

Creates a new project.

**Request Body:**
```json
{
  "name": "Conference Room Upgrade",
  "client": "TechFirm Inc",
  "address": "456 Business Ave, Chicago, IL 60601",
  "start_date": "2025-02-01",
  "end_date": "2025-02-15",
  "description": "Upgrade of 4 conference rooms with new AV equipment",
  "modules": ["team", "assets", "tasks", "files", "reports"]
}
```

**Example Response:**
```json
{
  "id": "proj_123458",
  "name": "Conference Room Upgrade",
  "client": "TechFirm Inc",
  "status": "active",
  "created_at": "2025-01-15T16:12:33Z"
}
```

### Assets

#### List Assets

```http
GET /projects/{project_id}/assets
```

Returns a list of all assets in a project.

**Query Parameters:**
- `status` (optional): Filter by status (inspected, received, fitted, tested)
- `folder` (optional): Filter by folder ID
- `limit` (optional): Number of assets to return (default: 50, max: 200)
- `offset` (optional): Pagination offset (default: 0)

**Example Response:**
```json
{
  "assets": [
    {
      "id": "asset_123456",
      "name": "Projector - Sony VPL-FHZ75",
      "status": "fitted",
      "serial": "SN12345678",
      "folder_id": "folder_123",
      "created_at": "2025-01-20T10:23:45Z",
      "updated_at": "2025-01-25T14:30:22Z"
    },
    {
      "id": "asset_123457",
      "name": "Display - Samsung QM85R",
      "status": "received",
      "serial": "SN87654321",
      "folder_id": "folder_124",
      "created_at": "2025-01-20T10:25:12Z",
      "updated_at": "2025-01-22T09:15:30Z"
    }
  ],
  "total": 24,
  "limit": 50,
  "offset": 0
}
```

#### Create Asset

```http
POST /projects/{project_id}/assets
```

Creates a new asset in a project.

**Request Body:**
```json
{
  "name": "Projector - Sony VPL-FHZ75",
  "description": "Laser projector for main conference room",
  "model": "VPL-FHZ75",
  "manufacturer": "Sony",
  "serial": "SN12345678",
  "status": "inspected",
  "folder_id": "folder_123"
}
```

#### Update Asset Status

```http
PATCH /projects/{project_id}/assets/{asset_id}/status
```

Updates the status of an asset.

**Request Body:**
```json
{
  "status": "fitted",
  "notes": "Installed on ceiling mount in main conference room",
  "images": ["image_url_1", "image_url_2"]
}
```

### Tasks

#### List Tasks

```http
GET /projects/{project_id}/tasks
```

Returns a list of all tasks in a project.

**Query Parameters:**
- `status` (optional): Filter by status (not_started, in_progress, completed, etc.)
- `assignee` (optional): Filter by assignee user ID
- `folder` (optional): Filter by folder ID
- `limit` (optional): Number of tasks to return (default: 50, max: 200)
- `offset` (optional): Pagination offset (default: 0)

**Example Response:**
```json
{
  "tasks": [
    {
      "id": "task_123456",
      "name": "Install projector in main conference room",
      "description": "Mount projector on ceiling and connect to AV system",
      "status": "completed",
      "assignee": "usr_789013",
      "due_date": "2025-01-25T00:00:00Z",
      "folder_id": "folder_123",
      "created_at": "2025-01-20T10:30:45Z",
      "updated_at": "2025-01-25T14:30:22Z"
    },
    {
      "id": "task_123457",
      "name": "Configure control system",
      "description": "Program Crestron control system for all rooms",
      "status": "in_progress",
      "assignee": "usr_789014",
      "due_date": "2025-01-28T00:00:00Z",
      "folder_id": "folder_125",
      "created_at": "2025-01-20T10:35:12Z",
      "updated_at": "2025-01-26T09:15:30Z"
    }
  ],
  "total": 18,
  "limit": 50,
  "offset": 0
}
```

### Reports

#### Generate Report

```http
POST /projects/{project_id}/reports
```

Generates a new report for a project.

**Request Body:**
```json
{
  "type": "daily",
  "date": "2025-01-25",
  "sections": ["tasks", "assets", "images"],
  "filters": {
    "tasks": {
      "status": ["completed", "in_progress"],
      "folders": ["folder_123", "folder_124"]
    },
    "assets": {
      "status": ["fitted", "tested"],
      "folders": ["folder_123", "folder_124"]
    }
  },
  "format": "pdf"
}
```

**Example Response:**
```json
{
  "id": "report_123456",
  "project_id": "proj_123456",
  "type": "daily",
  "date": "2025-01-25",
  "created_at": "2025-01-26T09:30:45Z",
  "status": "processing",
  "download_url": null,
  "estimated_completion": "2025-01-26T09:32:00Z"
}
```

#### Get Report Status

```http
GET /projects/{project_id}/reports/{report_id}
```

Checks the status of a report generation request.

**Example Response:**
```json
{
  "id": "report_123456",
  "project_id": "proj_123456",
  "type": "daily",
  "date": "2025-01-25",
  "created_at": "2025-01-26T09:30:45Z",
  "status": "completed",
  "download_url": "https://api.sitereports.live/v1/downloads/report_123456.pdf",
  "completed_at": "2025-01-26T09:31:30Z"
}
```

## Webhooks

SiteReports can send webhook notifications when certain events occur in your projects.

### Setting Up Webhooks

1. Go to "Settings" > "Webhooks"
2. Click "Add Webhook"
3. Enter the URL to receive webhook notifications
4. Select the events you want to be notified about
5. Click "Create Webhook"

### Webhook Events

- `project.created`: A new project has been created
- `project.updated`: Project details have been updated
- `asset.status_changed`: An asset's status has changed
- `task.created`: A new task has been created
- `task.status_changed`: A task's status has changed
- `report.completed`: A report has finished generating

### Webhook Payload Example

```json
{
  "event": "asset.status_changed",
  "created_at": "2025-01-25T14:30:22Z",
  "data": {
    "project_id": "proj_123456",
    "asset_id": "asset_123456",
    "asset_name": "Projector - Sony VPL-FHZ75",
    "previous_status": "received",
    "new_status": "fitted",
    "updated_by": "usr_789013"
  }
}
```

## Rate Limits

The API is subject to rate limiting to ensure fair usage:

- Standard plan: 60 requests per minute
- Professional plan: 120 requests per minute
- Enterprise plan: Custom limits based on needs

Rate limit headers are included in all API responses:

```
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 115
X-RateLimit-Reset: 1642258800
```

## Error Handling

The API uses standard HTTP status codes and returns detailed error messages:

```json
{
  "error": {
    "code": "invalid_parameter",
    "message": "The asset status provided is not valid",
    "param": "status",
    "documentation_url": "https://docs.sitereports.live/api/errors#invalid_parameter"
  }
}
```

## SDK Libraries

We provide official SDK libraries for popular programming languages:

- [JavaScript/Node.js](https://github.com/sitereports/sitereports-node)
- [Python](https://github.com/sitereports/sitereports-python)
- [PHP](https://github.com/sitereports/sitereports-php)
- [C#/.NET](https://github.com/sitereports/sitereports-dotnet)

## Further Resources

- [API Changelog](https://docs.sitereports.live/api/changelog)
- [Example Applications](https://github.com/sitereports/examples)
- [Community Integrations](https://docs.sitereports.live/integrations)