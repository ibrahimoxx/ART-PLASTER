@echo off
set "src=C:\Users\asus\.gemini\antigravity\brain\f91badfd-3e59-41d1-aece-42a0039c1cda\art_plaster_favicon_logo_1773937243608.png"
set "dest_public=d:\ART PLASTER\public\favicon.png"
set "dest_app=d:\ART PLASTER\app\icon.png"
set "app_icon_tsx=d:\ART PLASTER\app\icon.tsx"

echo Copying to public...
copy /Y "%src%" "%dest_public%"
echo Copying to app...
copy /Y "%src%" "%dest_app%"
echo Deleting dynamic icon renderer...
if exist "%app_icon_tsx%" del /F /Q "%app_icon_tsx%"
echo Done.
