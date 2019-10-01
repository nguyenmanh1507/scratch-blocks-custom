'use strict';

goog.provide('Blockly.BlockCopyCategory');

Blockly.BlockCopyCategory = function(workspace) {
  var xmlList = [];

  var blockCopy = workspace.blockCopy_;
  if (blockCopy.length) {
    for (var i = 0; i <= blockCopy.length - 1; i++) {
      var blockText = '<xml>';
      blockText += blockCopy[i];
      blockText += '</xml>';
      var dom = Blockly.Xml.textToDom(blockText).firstChild;
      xmlList.push(dom);
    }
  }

  return xmlList;
};

Blockly.BlockCopyCategory.getBlock = function(workspace) {
  return workspace.blockCopy_;
};

Blockly.BlockCopyCategory.setBlock = function(blockCopy, workspace) {
  if (workspace.blockCopy_) {
    workspace.blockCopy_.push(blockCopy);
  }
};
