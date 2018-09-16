gitrepo=https://github.com/jfuerlinger/my-sitemap
webappname=jfuerlinger-mysitemap
ressourcegroupname=githubsites
appworkingdir=dist

az group delete --name $ressourcegroupname

# Create a resource group.
az group create --location westeurope --name $ressourcegroupname

# Create an App Service plan in `FREE` tier.
az appservice plan create --name $webappname --resource-group $ressourcegroupname --sku FREE

# Create a web app.
az webapp create --name $webappname --resource-group $ressourcegroupname --plan $webappname

# Deploy code from a public GitHub repository. 
az webapp deployment source config --name $webappname --resource-group $ressourcegroupname \
--repo-url $gitrepo --branch master --manual-integration --app-working-dir $appworkingdir

# Copy the result of the following command into a browser to see the web app.
echo http://$webappname.azurewebsites.net