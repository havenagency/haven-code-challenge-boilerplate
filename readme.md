# Haven Agency Code challege

A single page sweepstakes. Dynamic content is provided by contentful. Entries are validated by a mock API.

## Objectives

* [ ] Build the design as provided. If something is missing from the design reach out to ask or make an educated guess. Attention to detail is important.
    * [ ] Mobile
    * [ ] Desktop
* [ ] The sweepstakes needs to be dynamic. Integrate content provided by contentful. If content is missing from any contentful models it will be hard coded into that content block. (Example: form fields)
* [ ] Integrate the submission API provided.
    * [ ] Display validation errors.
    * [ ] On success show a clear success state.
* [ ] 

# Dependencies

* [Node.js 14+](https://nodejs.org/en/)
* [Next.js](https://github.com/zeit/next.js/)
* [React.js](https://reactjs.org/)
* [Yarn](https://yarnpkg.com/en/): This project uses [yarn](https://yarnpkg.com/en/) instead of `npm` for dependencies management.
* [Contentful Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

# Local Setup

- Clone this repo
- Install global dependencies
- Install project dependencies with `yarn install`

# Design

Design is provided in figma.

# Content

Content is provided by contentful. Check the [Contentful Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) for documentation on it's use.

## Models

Models are already set up in the provided contentful space and structured as *Pages*, *Content Blocks*, and *Elements*.

- *Page*: Top level content that has page level content and references to Content Blocks.
- *Content Block*: A section of content. Referenced on one or more pages.
- *Element*: Small collection of fields used anywhere.

| Name     | Content Type         | Level         | System Ids    |
| -------- | -------------------- | ------------- | ------------- |
| Page     | `page`               | Page          | 
| Header   | `contentBlockHeader` | Content Block |
| Well     | `contentBlockWell`   | Content Block |
| Form     | `contentBlockForm`   | Content Block |
| Footer   | `contentBlockFooter` | Content Block |
| Linkable | `linkable`           | Element       |
| Button   | `button`             | Element       |

The typescript interfaces for all models are provided in the application as `contentful.d.ts`

### Submitting Entries To The Mock API

Entries are submitted to `https://fpm4g8jeu4.execute-api.us-west-2.amazonaws.com/prod`

# Request

```
{
    "firstname": "John",
    "lastname": "Smith",
    "email": "johnsmith@test.com",
    "state": "Arizona",
    "retail_store": "storename",
    "opt_in": true
}
```

## Response 200

```
{
    message: "Success",
    status: true
}
```

## Error 422

Errors are returned for each invalid field.

```
{
    "firstname": [
        "The firstname field is required"
    ],
    "lastname": [
        "The lastname field is required"
    ],
    "email": [
        "The email field is required",
        "Not a valid Email Address"
    ],
    "state": [
        "The state field is required",
        "The state field is not one of US state list"
    ],
    "retail_store": [
        "The retail store option is required"
    ]
}
```