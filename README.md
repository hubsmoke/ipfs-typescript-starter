# ipfs-typescript-starter

The goal of this repo is to provide a minimal Typescript configuration that supports using the [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client) package.

## Quickstart

1. Start local ipfs node at 5001 (or edit URL in src/index.ts)
2. run `npm run start:dev`

Expected output:

```
{
  path: 'QmQzCQn4puG4qu8PVysxZmscmQ5vT1ZXpqo7f58Uh9QfyY',
  cid: CID(QmQzCQn4puG4qu8PVysxZmscmQ5vT1ZXpqo7f58Uh9QfyY),
  size: 20
}
```

## Background / Motivation

By default a new Typescript project will fail to import ipfs-http-client and other IPFS packages with the following error:

```
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in .../node_modules/ipfs-http-client/package.json
```

There are workarounds including locking to to an older version `56.0.0` however, it is more appropriate to offer a configuration example project to the community.

## Related Issues

- https://github.com/ipfs/js-ipfs/issues/4180
- https://github.com/ipfs/js-ipfs/issues/4226
- https://github.com/ipfs/js-ipfs/issues/4139
- https://github.com/ipfs/js-ipfs/issues/4127
- https://github.com/ipfs/js-ipfs/issues/4169
- https://github.com/ipfs/js-ipfs/issues/4130
