download and install git from the website https://git-scm.com/downloads
clone the repo
npm start
done

DEPLOYMENT PROCESS:
add "homepage": "websiteurl.com" to package.json file
npm run build
build folder will be created then add a .htaccess file to the build folder
contents of .htaccess on this site:  https://dev.to/crishanks/deploy-host-your-react-app-with-cpanel-in-under-5-minutes-4mf6
upload the build folder in httpdocs