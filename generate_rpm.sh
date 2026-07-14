#!/bin/bash
set -e

APP_NAME="non-steam-automation"
APP_VERSION="0.0.0"
APP_RELEASE="1"
ARCH="x86_64"

RPM_TOPDIR="$HOME/rpmbuild"

echo "Cleaning previous build..."
rm -rf "$RPM_TOPDIR/BUILDROOT"
rm -rf "$RPM_TOPDIR/SPECS/${APP_NAME}.spec"

echo "Creating .spec file..."
mkdir -p "$RPM_TOPDIR/SPECS"
cat << SPEC > "$RPM_TOPDIR/SPECS/${APP_NAME}.spec"
Name:           ${APP_NAME}
Version:        ${APP_VERSION}
Release:        ${APP_RELEASE}
Summary:        Non-Steam Automation Tool
License:        MIT
AutoReqProv:    no

%description
Automation tool for managing non-steam games

%prep
# No prep needed

%build
# No build needed

%install
mkdir -p %{buildroot}/opt/NonSteamAutomation
cp -R /home/marcus/Documentos/STLinuxTools/release/linux-unpacked/* %{buildroot}/opt/NonSteamAutomation/

# Desktop file
mkdir -p %{buildroot}/usr/share/applications
cat << DESK > %{buildroot}/usr/share/applications/${APP_NAME}.desktop
[Desktop Entry]
Name=Non-Steam Automation
Exec=/opt/NonSteamAutomation/non-steam-automation %U
Terminal=false
Type=Application
Icon=${APP_NAME}
StartupWMClass=nonsteamautomation.desktop
Comment=Automation tool for managing non-steam games
Categories=Utility;
DESK

# Icon
mkdir -p %{buildroot}/usr/share/icons/hicolor/512x512/apps
cp /home/marcus/Documentos/STLinuxTools/build/icon.png %{buildroot}/usr/share/icons/hicolor/512x512/apps/${APP_NAME}.png

%files
/opt/NonSteamAutomation/
/usr/share/applications/${APP_NAME}.desktop
/usr/share/icons/hicolor/512x512/apps/${APP_NAME}.png

%changelog
* Tue Jul 14 2026 Marcus <marcus@example.com> - 0.0.0-1
- Initial RPM release
SPEC

echo "Building RPM..."
rpmbuild -bb "$RPM_TOPDIR/SPECS/${APP_NAME}.spec" --define "_build_id_links none" --define "debug_package %{nil}"

echo "Copying RPM to release directory..."
mkdir -p release
cp $RPM_TOPDIR/RPMS/${ARCH}/${APP_NAME}-${APP_VERSION}-${APP_RELEASE}.${ARCH}.rpm release/

echo "Done!"
