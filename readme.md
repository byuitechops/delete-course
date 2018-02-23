# Delete Course
### *Package Name*: delete-course
### *Type*: Shell Module (Cleanup)
### *Platform*: All
### *Required*: Required

## Purpose

Deletes the newly created Canvas course, if specified in the launch parameters.

## How to Install

```
npm install delete-course
```

## Run Requirements

This should always run last, if possible, so it doesn't delete the course if something goes wrong.

## Options

If there are options that need to be set before the module runs, include them in a table, like this:

| Option | Values | Description |
|--------|--------|-------------|
|Delete Course| true/false | If true, the course will be deleted. The default is false.|

## Outputs

None

## Process

Sends a DEL request to Canvas for the course.

## Log Categoriesa

None

## Requirements

Must delete the course if the option is turned on.