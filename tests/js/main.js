'use strict';

(() => {
  // Create main workspace.
  const workspace = Blockly.inject('blocklyDiv', {
    comments: true,
    disable: false,
    collapse: false,
    media: '../media/',
    readOnly: false,
    scrollbars: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 0.675,
      maxScale: 4,
      minScale: 0.25,
      scaleSpeed: 1.1
    },
    colours: {
      fieldShadow: 'rgba(255, 255, 255, 0.3)',
      dragShadowOpacity: 0.6
    },
    toolboxCopy: true
  });

  window.ws = workspace;
  // const flyout = workspace.getFlyout();
  // flyout.setVisible(false);

  const domText =
    '<xml><variables></variables><block type="motion_movesteps" id="LSZkrE-:ipf^C2o$RpG`" x="517" y="111"><value name="STEPS"><shadow type="math_number" id="xTaEHv1NF:2XgggxV~tq"><field name="NUM">10</field></shadow></value></block></xml>';
  const dom = Blockly.Xml.textToDom(domText);
  Blockly.Xml.domToWorkspace(dom, workspace);

  let blockDelete;
  let isOutside;

  workspace.addChangeListener(event => {
    console.log({ event: event.type });
    if (event.type === Blockly.Events.DRAG_OUTSIDE) {
      isOutside = event.isOutside;
    }

    if (event.type === Blockly.Events.MOVE) {
      isOutside = false;
    }

    if (event.type === Blockly.Events.END_DRAG) {
      blockDelete = workspace.getBlockById(event.blockId);
    }

    if (isOutside) {
      blockDelete = workspace.getBlockById(event.blockId);
    } else {
      blockDelete = null;
    }
  });

  const binEl = document.querySelector('#trash');
  binEl.addEventListener('mouseup', () => {
    if (blockDelete) {
      blockDelete.shouldDisposeOutside_ = true;
      blockDelete.dispose(false, true);
    }
  });

  binEl.addEventListener('touchmove', () => {
    // console.log('touch');
    if (blockDelete) {
      blockDelete.dispose(false, true);
    }
  });
})();
