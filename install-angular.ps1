# Define Angular environment versions
$angularCLI = "18.2.9"
$angularCore = "18.2.8"
$nodeVersion = "20.17.0"
$npmVersion = "10.8.2"
$rxjsVersion = "7.8.1"
$typescriptVersion = "5.5.4"
$zoneJsVersion = "0.14.10"
$angularMaterialVersion = "18.2.9"

# Helper function to check and install Node.js
Function Install-Node {
    Write-Output "Checking Node.js installation..."
    $nodeInstalled = node -v
    if (-not $?) {
        Write-Output "Node.js is not installed. Downloading and installing Node.js $nodeVersion..."
        Invoke-WebRequest -Uri "https://nodejs.org/dist/v$nodeVersion/node-v$nodeVersion-x64.msi" -OutFile "node.msi"
        Start-Process msiexec.exe -ArgumentList "/I node.msi /quiet" -Wait
        Remove-Item "node.msi"
        Write-Output "Node.js installed successfully."
    } else {
        Write-Output "Node.js is already installed: $nodeInstalled"
    }
}

# Install Node.js
Install-Node

# Verify npm version
Write-Output "Updating npm to version $npmVersion..."
npm install -g npm@$npmVersion

# Install Angular CLI globally
Write-Output "Installing Angular CLI $angularCLI..."
npm install -g @angular/cli@$angularCLI

# Install Angular packages locally in a project directory
Write-Output "Installing Angular packages locally..."
cmd.exe /c "npm install @angular/core@$angularCore `
    @angular/animations@$angularCore `
    @angular/common@$angularCore `
    @angular/compiler@$angularCore `
    @angular/compiler-cli@$angularCore `
    @angular/forms@$angularCore `
    @angular/platform-browser@$angularCore `
    @angular/platform-browser-dynamic@$angularCore `
    @angular/router@$angularCore `
    @angular/material@$angularMaterialVersion `
    rxjs@$rxjsVersion `
    typescript@$typescriptVersion `
    zone.js@$zoneJsVersion"

Write-Output "Angular environment setup completed successfully!"
