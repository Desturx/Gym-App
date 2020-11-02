:: cd C:\Users\%username%\AppData\Local\Android\sdk\emulator
:: emulator -avd Pixel_3a_XL_API_29
:: emulator -no-snapshot-load -avd Pixel_3a_XL_API_29

ECHO OFF
CLS
:MENU
ECHO.
ECHO ...............................................
ECHO PRESS 1, 2 OR 3 to select your task
ECHO ...............................................
ECHO.
ECHO 1 - Open emulator WITH savestate
ECHO 2 - Open emulator WITHOUT savestate
ECHO 3 - EXIT
ECHO.
SET /P M=Type 1, 2, 3, or 4 then press ENTER:
IF %M%==1 GOTO EMU1
IF %M%==2 GOTO EMU2
IF %M%==3 GOTO SALIDA
:EMU1
cd C:\Users\%username%\AppData\Local\Android\sdk\emulator
emulator -avd Pixel_3a_XL_API_29
GOTO SALIDA
:EMU2
cd C:\Users\%username%\AppData\Local\Android\sdk\emulator
emulator -no-snapshot-load -avd Pixel_3a_XL_API_29
GOTO SALIDA
:SALIDA
cd C:\Desarrollo\cryptoTracker
