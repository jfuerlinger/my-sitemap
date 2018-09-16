@echo off

echo start deploying ...
REM cd client-app
REM IF %ERRORLEVEL% NEQ 0 goto error

echo performing init steps  ...
call npm cache clean -f
call npm install -g n
call n stable

echo installing packages ...
call npm install
IF %ERRORLEVEL% NEQ 0 goto error

echo building angular app ...
call node node_modules\@angular\cli\bin\ng build -prod
IF %ERRORLEVEL% NEQ 0 goto error

echo removing old files ...
rm -rf %DEPLOYMENT_TARGET%/*
IF %ERRORLEVEL% NEQ 0 goto error

echo copying web.config ...
xcopy web.config %DEPLOYMENT_TARGET%
IF %ERRORLEVEL% NEQ 0 goto error

echo copying app ...
xcopy dist %DEPLOYMENT_TARGET% /S
IF %ERRORLEVEL% NEQ 0 goto error

goto end

:error
cd ..
echo An error has occured during web site deployment.
exit /b 1

:end
cd ..
echo Finished successfully.