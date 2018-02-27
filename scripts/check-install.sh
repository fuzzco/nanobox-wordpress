#!/bin/bash
&> 'Check to make sure wordpress is here at all'
if test -d ./wp/
then
  &> 'yup we good'
else
  &> 'nope we need that'
  git clone git@github.com:nanobox-quickstarts/nanobox-wordpress.git wp
fi
rsync -va --delete ./plugins/ ./wp/wp-content/plugins/
rsync -va --delete ./theme/ ./wp/wp-content/themes/fuzzco