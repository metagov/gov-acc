# Meridian-Quartz

A specialized fork of [Quartz](https://github.com/jackyzha0/quartz) optimized for Meridian Digital Garden deployments.

## Attribution

This project is based on [Quartz](https://github.com/jackyzha0/quartz) by [@jackyzha0](https://github.com/jackyzha0). 

Original Quartz is licensed under the MIT License. All original license terms and attribution are preserved.

## Meridian-Specific Features

- **Workspace Root Content Sourcing**: Reads content from parent workspace directory instead of internal `content/`
- **Built-in Meridian Integration**: Pre-configured plugins for Collate, Archive, and Broadcast functionality
- **Optimized Ignore Patterns**: Automatically excludes Meridian infrastructure files (`.meridian/`, etc.)
- **Streamlined Initialization**: No runtime customization needed - ready to build immediately
- **Reduced Dependencies**: Smaller footprint with only necessary components

## Installation Location

This repository is designed to be cloned into `workspace/.quartz/` where it will:
- Source content from `workspace/` (parent directory)
- Build output to `workspace/.quartz/public/`
- Ignore Meridian infrastructure automatically

## Usage

This fork is specifically designed for use with Meridian's Deploy functionality. It should not be used directly but rather through Meridian's deployment system.

## Differences from Vanilla Quartz

### Removed Components
- `docs/` - Vanilla Quartz documentation
- `content/` - Example content (sources from workspace root instead)
- `.github/` - Vanilla CI/CD workflows

### Added Components
- `plugins/meridian/` - Meridian-specific integration plugins
- Pre-configured ignore patterns for Meridian workflow
- Optimized package.json for Meridian requirements

### Configuration Changes
- Content sourcing from `../` (workspace root) instead of `./content`
- Meridian-optimized ignore patterns
- Auto-registered Meridian plugins

## License

MIT License - same as original Quartz. See LICENSE file for details.

## Contributing

This is a specialized fork for Meridian. For general Quartz contributions, please contribute to the [original Quartz repository](https://github.com/jackyzha0/quartz).

For Meridian-specific improvements, please contribute through the main Meridian project.
