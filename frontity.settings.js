const settings = {
  "name": "my-frontity-project",
  "state": {
    "frontity": {
      "url": "http://front.trendpatik.com",
      "title": "Kaya's World of Programming",
      "description": false
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About Me",
              "/about-me/"
            ],
            [
              "Programming Basics",
              "/category/programming/"
            ],
            [
              "Some CSS",
              "/category/css/"
            ],
            [
              "WordPress",
              "/category/wordpress/"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://front.trendpatik.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
