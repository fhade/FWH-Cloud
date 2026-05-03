# MkDocs Starter Kit

![Max Security](images/security-max.png)

This starter kit is based on the [Material theme](https://squidfunk.github.io/mkdocs-material/)
for [MkDocs](https://www.mkdocs.org/), a static site generator built for
documentation.

## Install

### Manual

1. Ensure that you're running Node >= 8.11.2

2. Run `npm install` to install the Markdownlint dependencies

3. Make sure you have a recent version of [Python](https://www.python.org/downloads/) - Python version >= 3.6

4. Create a Python virtual environment and install the dependencies Install
	if you wish to build and serve your doc locally

    Or use this snippet to setup mkdocs:

	1. Create virtual environment with a folder `env`

      	```
      		python3 -m venv env
      	```
    	
	2. Activate virtual environment

		!!! note ""
			Each time the terminal is opened you need to activate the virtual environment.

		- Windows:
		
		  ```
 		  .\env\Scripts\activate
      		  ```
      	
		- Linux:
		
	 	  ```
        		source env/bin/activate
                  ```
	
	
	3. Install the requirements

      	```
      	pip install -r requirements.txt
      	```

	4. Start the mkdocs

      	```
      	mkdocs serve
      	```


## Commands

- `npm run lint`: Runs Markdownlint-cli and outputs linting errors to the
  console.
- `npm run format`: Run Markdownlint-cli and fix the linting errors
- `npm run prepare`: Run to have Git hooks
- `npm start`: Builds and serves the MkDocs site to *localhost:8000*,
  auto-refreshes on file change.
- `npm build`: Builds the MkDocs site to *site/* folder. There's no need to
  build the site before committing though -- we handle this in the CI defined in
  the `.gitlab-ci.yml` file.

!!! note "Linting rules"
    We've configured Markdownlint to use the ["Relaxed Rules"](https://github.com/DavidAnson/markdownlint/blob/master/style/relaxed.json)
    by default. Refer to the [full list of rules](https://github.com/DavidAnson/markdownlint#rules--aliases)
    if you wish to add or modify your linting rules.
    <br><br> To save time, we recommend that you add Markdownlint to your IDE: [Sublime](https://github.com/jonlabelle/SublimeLinter-contrib-markdownlint)
    | [VSCode](https://github.com/DavidAnson/vscode-markdownlint).

## Extras

### Extensions

We've enabled several extensions in the `mkdocs.yml` file, notably:

- [Admonition](https://squidfunk.github.io/mkdocs-material/extensions/admonition/)
  for styled blocks (*e.g.* info, warning, bug, etc)
- [CodeHilite](https://squidfunk.github.io/mkdocs-material/extensions/codehilite/)
  for highlighting syntax in code blocks
- [Permalinks](https://squidfunk.github.io/mkdocs-material/extensions/permalinks/)
  for linking to subsections of the doc

If you wish to add an extension, head to the [Extensions](https://squidfunk.github.io/mkdocs-material/setup/extensions/) section in the Material for MkDocs documentation to see which are available.

### Plugins

We've also enabled some plugins in the `mkdocs.yml` file, notably:

- [Search](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/)
  for searching through your doc using [lunr.js](https://lunrjs.com/)
- [Revision date](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin)   for outputting the git revision date of the corresponding markdown file at the bottom   of the page
- [Awesome Pages Plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin) 
  an mkdocs plugin that simplifies configuring page titles and their order
- [Minify](https://github.com/byrnereese/mkdocs-minify-plugin) 
  for html/css/js minification 
- [Redirects](https://github.com/mkdocs/mkdocs-redirects)
  to create page redirects (e.g. for moved/renamed pages)

If you wish to add a plugin, head to the [Setup](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/) section in the Material for MkDocs documentation to see which are available.
