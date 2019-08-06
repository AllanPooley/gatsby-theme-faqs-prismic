# Gatsby Theme FAQ Prismic

- [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) for adding polished FAQ pages 💅out-of-the-box.

## Why?

TODO

## Installation

```
yarn add @littleplusbig/gatsby-theme-faq-prismic
```

## Configuration

In your `gatsby-config.js`, under `plugins` add:

```
{
  resolve: "gatsby-theme-faq-prismic",
  options: {
    repositoryName: PRISMIC_REPO_NAME,
    accessToken: PRISMIC_API_KEY,
    siteName: YOUR_SITE_NAME // (Optional)
    homePath: HOME_PATH // (Optional) Defaults to '/'
  },
},
```

Replacing `PRISMIC_REPO_NAME`, `PRISMIC_API_KEY`, `YOUR_SITE_NAME` and `HOME_PATH` with their respective values.

## Prismic Configuration

1. Create a new custom type in your Prismic repository.
2. Make sure that it is repeatable and name it `Question Category`.
3. Using the JSON Editor paste in the following content structure:

```
{
  "Main" : {
    "category_name" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Category Name",
        "placeholder" : "Category Name"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Category Slug",
        "placeholder" : "category-slug"
      }
    }
  }
}
```

4. Create one or more `Question Category` Content pages.

5. Next, create another custom type in your Prismic repository, singular or repeatable depending on your needs, and name it `Frequently Asked Questions`.

6. Using the JSON Editor paste in the following content structure:

```
{
  "Main": {
    "page_name": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Page Name",
        "placeholder": "Enter page name"
      }
    },
    "uid": {
      "type": "UID",
      "config": {
        "label": "Slug",
        "placeholder": "Enter slug"
      }
    },
    "questions": {
      "type": "Group",
      "config": {
        "fields": {
          "question": {
            "type": "StructuredText",
            "config": {
              "single": "heading2",
              "label": "Question",
              "placeholder": "How safe is the journey?"
            }
          },
          "answer": {
            "type": "StructuredText",
            "config": {
              "multi": "paragraph, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
              "allowTargetBlank": true,
              "label": "Answer",
              "placeholder": "The trip to Mars cannot be called risk free. Like any venture..."
            }
          },
          "category": {
            "type": "Link",
            "config": {
              "select": "document",
              "customtypes": [
                "question_category"
              ],
              "label": "Category"
            }
          }
        },
        "label": "Questions"
      }
    }
  },
  "SEO": {
    "meta_title": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Meta Title",
        "placeholder": "Enter meta title"
      }
    },
    "meta_description": {
      "type": "StructuredText",
      "config": {
        "single": "paragraph",
        "label": "Meta Description",
        "placeholder": "Enter meta description"
      }
    },
    "open_graph_image": {
      "type": "Image",
      "config": {
        "constraint": {
          "width": 1200,
          "height": 630
        },
        "thumbnails": [],
        "label": "Open Graph Image"
      }
    }
  }
}
```

7. Create a `Frequently Asked Question` content page.

## Laying Down the Law

If you don't already have a Privacy Policy or Terms and Conditions document, you can generate one at [Iubenda](https://www.iubenda.com/).

## Overriding the Theme

### Colors and Styles

This project uses [theme-ui](https://theme-ui.com/), allowing some of the styling to be customised to your project's brand.

In order to override the styles, in the `src` directory of your project, add a folder titled `gatsby-plugin-theme-ui`, and within that folder a file named `index.js`.

Inside of this file (`your-gatsby-project/src/gatsby-plugin-theme-ui/index.js`) add the following:

```
import baseTheme from '@littleplusbig/gatsby-theme-faq-prismic/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  colors: {
    ...baseTheme.colors,
    text: '#333333',
    background: '#FFFFFF',
    primary: '#5B2589',
    primaryLighter: '#6F2B9F',
    primaryEvenLighter: '#BB75D1',
    white: '#FFFFFF',
    offWhite: '#FCFAFF',
    black: '#000000',
    offBlack: '#333333',
    grey: '#F3F3F3',
  },
};

```

Above are the default values for the theme, which you can change depending on your project.

For example, here is how I might change the theme colours from shades of purple, to a snazzy blue:

```
import baseTheme from '@littleplusbig/gatsby-theme-faq-prismic/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#22a6b3',
    primaryLighter: '#7ed6df',
    primaryEvenLighter: '#c7ecee',
  },
};

```

The complete set of customisable theme values can be explored in [gatsby-theme-faq-prismic/src/styles/theme.js](https://github.com/littleplusbig/gatsby-theme-faq-prismic/blob/master/src/styles/theme.js)

More information about `gatsby-plugin-theme-ui` [here](https://www.npmjs.com/package/gatsby-plugin-theme-ui).

### Components

The components that make up the Frequently Asked Questions pages can be some what customised too. This can be done through concept new to Gatsby Themes called '[Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)'.

If you wish to override a component, in the `src` directory of your project, create the following directory structure: `@littleplusbig/gatsby-theme-faq-prismic/components`.

There are several components that a Frequently Asked Questions page, they can all be viewed here: [gatsby-theme-faq-prismic/src/components](https://github.com/littleplusbig/gatsby-theme-faq-prismic/tree/master/src/components)

An example of how these components might be customised is adding your project's `<Header />` and `<Footer />` components to the layout.

In order to do this I create a shadowing `layout.js` in the directory we've just created (`your-gatsby-project/src/@littleplusbig/gatsby-theme-faq-prismic/components/layout.js`):

```
import React from 'react';
import { Header, Footer } from '../../somewhere-in-your-project'

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
```
