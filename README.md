# Putting all together with Foundation 6 for websites development
This is the repository integrating some functionality with Foundation 6.
we are working on it but you can already get some ideas looking at the code.
For example how to work with templates, pages, partials with panini or how to organize the sass files with in src and the dist output for production.


`What are we talking about here:`

Foundation for sites: application framework to create responsive websites. You can download it but we will use the foundation command line tool instead
http://foundation.zurb.com/sites.html

Foundation-cli: put all the magic together
http://foundation.zurb.com/sites/docs/installation.html

Panini: Flat file compiler powered by Handlebars
http://foundation.zurb.com/sites/docs/panini.html
https://github.com/zurb/panini

SASS: Scripting language for css compiled with compass.
http://sass-lang.com/documentation/file.SASS_REFERENCE.html

npm: NodeJS package manager to instal node programs.  Foundation cli it is organized in npm so you will need NodeJS and npm installed but probably you already have.
https://howtonode.org/introduction-to-npm

Bower: Package manager for Javascript libraries. Make it easier to grab libraries and versions.
https://egghead.io/lessons/bower-introduction-and-setup

Browsersync: Once you run foundation watch will open the default browser and everytime you change something in sass or html it will be reflected in the browser like magic.
https://www.browsersync.io/

Github: proof of concept in our master-foundation6
https://github.com/open-ecommerce/masters-foundation6



Install the foundation client

sudo npm install --global foundation-cli



foundation -help

Commands:
  new       Create a new Foundation project
  update    Update an existing Foundation project
  watch     Watch a project's files for changes
  build     Build a project's files for production
  help      Show this screen
  -v        Display the CLI's version




Install npm and bower components
If you are using our repo you will need to run npm install and bower install before you can build with foundation cli
sudo npm install
bower install



If all went ok you will have everything ready to start your craft….

You can use watch to run the site in the browser
foundation watch


We are creating a document to explain how the panini structure work in foundation 6 but for now i suggest to check the foundation panini link and get ideas from the foundation blocks that come with the html and sass code ready to use:

Templates, pages and partials
http://foundation.zurb.com/sites/docs/panini.html

Building bloks:
http://foundation.zurb.com/develop/building-blocks.html



Troubleshooting

Failed to load external module babel-register

You can add .babelrc file to the root of your project:
https://github.com/zurb/foundation-sites/wiki/Upgrading-to-Foundation-6.2

Or just add it globally to your system:

sudo npm install babel-register babel-preset-es2015
