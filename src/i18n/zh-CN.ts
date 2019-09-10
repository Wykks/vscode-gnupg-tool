import { Ii18n } from '../i18n';

const translation: Ii18n = {
  AllFiles: '所有的文件',
  CommandCheckGnuPG: '检查 GnuPG',
  CommandClearSignFile: '签名文件 (clear-sign)',
  CommandCopyFingerprintToClipboard: '将指纹复制到剪贴板',
  CommandCopyKeyIdToClipboard: '将KeyId复制到剪贴板',
  CommandDecrypt: '解码 ...',
  CommandDecryptFile: '解密文件',
  CommandDecryptPreview: '预览解密文件',
  CommandDecryptSelection: '解密选择',
  CommandDeletePublicKey: '删除公钥',
  CommandDeleteSecretKey: '删除密钥',
  CommandEditPublicKey: '编辑公钥 （通过终端）',
  CommandEncrypt: '加密 ...',
  CommandEncryptFileAsym: '使用收件人加密文件',
  CommandEncryptFileSymm: '使用密码短语加密文件',
  CommandEncryptPreviewAsym: '使用收件人预览加密文件',
  CommandEncryptPreviewSymm: '使用密码短语预览加密文件',
  CommandEncryptSelectionAsym: '使用收件人加密选择',
  CommandEncryptSelectionSymm: '使用密码短语加密选择',
  CommandEndSession: '结束会议',
  CommandEnvironment: '环境 ...',
  CommandExportPublicKeys: '导出公钥',
  CommandExportSecretKeys: '导出密钥',
  CommandExportSecretSubKeys: '导出秘密子密钥',
  CommandImportKeys: '导入密钥',
  CommandGenerateKey: '生成密钥 （通过终端）',
  CommandKeys: '按键 ...',
  CommandListPublicKeys: '列出公钥',
  CommandListSecretKeys: '列出密钥',
  CommandShowSmartcard: '显示 Smartcard',
  CommandSignFile: '签名文件 (detach-sign)',
  CommandTrust: '信任 ...',
  CommandVerifyFile: '验证文件',
  Decrypted: '解密',
  Encrypted: '加密',
  GnuPGCopyFingerprintToClipboardFailed: 'GnuPG: 将指纹复制到剪贴板失败!',
  GnuPGCopyKeyIdToClipboardFailed: 'GnuPG: 将 KeyId 复制到剪贴板失败！',
  GnuPGDecryptionFailed: 'GnuPG: 解密失败了!',
  GnuPGDeleteKeyFailed: 'GnuPG: 删除公钥失败!',
  GnuPGDeleteSecretKeyFailed: 'GnuPG: 删除密钥失败!',
  GnuPGEditPublicKeyFailed: 'GnuPG: 编辑公钥失败',
  GnuPGEncryptionFailed: 'GnuPG: 加密失败!',
  GnuPGEndSessionFailed: 'GnuPG: 结束会话失败!',
  GnuPGEndSessionSuccessfully: 'GnuPG: 会议成功结束.',
  GnuPGFileAlreadyEncrypted: 'GnuPG: 文件已加密 (*.asc|*.gpg).',
  GnuPGFileDecryptedSuccessfully: 'GnuPG: 文件解密成功.',
  GnuPGFileEncryptedSuccessfully: 'GnuPG: 文件加密成功.',
  GnuPGFileIsAlreadyASignature: 'GnuPG: 文件已经是签名 (*.sig).',
  GnuPGFileIsNotASignature: 'GnuPG: 文件不是签名 (*.sig|*.asc).',
  GnuPGFileNotEncrypted: 'GnuPG: 文件未加密 (*.asc|*.gpg).',
  GnuPGFileSignedSuccessfully: 'GnuPG: 文件签名成功.',
  GnuPGGnuPGNotAvailable: 'GnuPG: GnuPG 无法使用!',
  GnuPGKeyExportFailed: 'GnuPG: 密钥导出失败!',
  GnuPGKeyExportSuccessfully: 'GnuPG: 密钥导出成功!',
  GnuPGKeyImportFailed: 'GnuPG: 密钥导入失败!',
  GnuPGKeyImportSuccessfully: 'GnuPG: 密钥导入成功!',
  GnuPGListPublicKeysFailed: 'GnuPG: 列表公钥失败!',
  GnuPGListSecretKeysFailed: 'GnuPG: 列表密钥失败!',
  GnuPGNotAvailable: 'GnuPG 无法使用!',
  GnuPGNoRecipientsSelectedForEncryption: 'GnuPG: 没有选择加密的收件人.',
  GnuPGNoTextSelectedForDecryption: 'GnuPG: 未选择任何文本进行解密.',
  GnuPGNoTextSelectedForEncryption: 'GnuPG: 未选择加密文本.',
  GnuPGFunctionIsNotSupportedWithVersion1x: 'GnuPG: gpg v1.x 不支持该功能',
  GnuPGFunctionIsNotSupportedWithVersion2x: 'GnuPG: gpg v2.x 不支持该功能',
  GnuPGNotSupportedPlatform: 'GnuPG: 不支持的平台',
  GnuPGPublicKey: 'GnuPG 公钥',
  GnuPGPublicKeyDeletedSuccessfully: 'GnuPG: 公钥已成功删除',
  GnuPGSecretKey: 'GnuPG 密钥',
  GnuPGSecretKeyDeletedSuccessfully: 'GnuPG: 密钥已成功删除',
  GnuPGSelectPublicKey: '选择公钥 ...',
  GnuPGShowSmartcardFailed: 'GnuPG: 节目 Smartcard 失败!',
  GnuPGSignFailed: 'GnuPG: 签名失败!',
  GnuPGSwitchToTerminalAndHitReturn: '切换到终端并按 <RETURN>',
  GnuPGTerminal: 'GnuPG 终奌站',
  GnuPGUsingHomedir: 'GnuPG: 运用 homedir',
  GnuPGVerfication: 'GnuPG: 验证',
  GnuPGVerficationFailed: 'GnuPG: 验证失败!',
  SelectKeyToExport: '选择要导出的密钥 ...',
  SelectRecipients: '选择收件人 ...',
  SelectSigner: '选择签名者 ...',
  Verified: '验证'
};

export default translation;
