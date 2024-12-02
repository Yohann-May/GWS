# Get the current directory (assumed to be the Angular project directory)
$projectPath = Get-Location

# Check if Angular CLI is available
Write-Output "Checking if Angular CLI is installed..."
if (-Not (Get-Command ng -ErrorAction SilentlyContinue)) {
    Write-Error "Angular CLI is not installed or not available in the system PATH. Please install it using the 'install-angular.ps1' script and try again."
    exit
}

# Start the Angular development server
Write-Output "Starting the Angular development server in: $projectPath"
Start-Process "cmd.exe" -ArgumentList "/c ng serve --open" -NoNewWindow -Wait
