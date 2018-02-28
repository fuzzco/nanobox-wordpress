#!/bin/bash
echo 'Check to make sure wordpress is here at all'
if test -d ./wp/
then
  echo 'yup we good'
  exit 0
else
  echo 'Project not initialized: Run `$ npm run init`'
  exit 1
fi