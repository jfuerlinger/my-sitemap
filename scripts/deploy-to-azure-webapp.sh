gitrepo=https://github.com/jfuerlinger/my-sitemap
webappname=jfuerlinger-mysitemap
ressourcegroupname=githubsites

# Deploy code from a public GitHub repository. 
az webapp deployment source config --name $webappname --resource-group $ressourcegroupname \
--repo-url $gitrepo --branch master --manual-integration

# Copy the result of the following command into a browser to see the web app.
echo http://$webappname.azurewebsites.net