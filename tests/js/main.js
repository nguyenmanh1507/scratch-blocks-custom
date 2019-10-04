(function() {
  'use strict';

  const defaultWS =
    '<xml><variables><variable type="" id="K6UTKE?W|~9w75M.e3+n" islocal="false" iscloud="false">a</variable></variables><block type="event_whenflagclicked" id="kxqgtz6CHsFL2DSg.x:Q" x="315" y="285"><next><block type="control_forever" id=";kECNk;CI3k!VM^sP3d%" movable="false"></block></next></block>' +
    '<block type="data_setvariableto" id="as[[T;KOFx#=Moj]0Rbv" x="285" y="15"><field name="VARIABLE" id="K6UTKE?W|~9w75M.e3+n" variabletype="">a</field><value name="VALUE"><shadow type="text" id="km3SUA^KzIBC$M$EK$te"><field name="TEXT">0</field></shadow></value><next><block type="extension_music_drum" id="X2Z(K~6[?Fr/W/k?P}Qp"><value name="NUMBER"><shadow type="math_number" id="nRZj=0d0rSnlCUqHi}GF"><field name="NUM">1</field></shadow></value><next><block type="control_wait" id="Evt`DL{Yj]BXs=.c-p[L"><value name="DURATION"><shadow type="math_positive_number" id="_u3o?d41_1DjE89](k^}"><field name="NUM">1</field></shadow><block type="sensing_loudness" id="fVb$2TjyM?K.@O,h1VXc"></block></value><next><block type="extension_pen_down" id="3.]%KQk*ld}7:|caEsF4"></block></next></block></next></block></next></block></xml>';

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
      scaleSpeed: 1.1,
    },
    colours: {
      fieldShadow: 'rgba(255, 255, 255, 0.3)',
      dragShadowOpacity: 0.6,
    },
    grid: { spacing: 30, length: 3, colour: '#ccc', snap: true },
  });

  window.ws = workspace;

  workspace.addChangeListener(event => {
    // if (event.type === Blockly.Events.BLOCK_CREATE) {
    //   const block = workspace.getBlockById(event.blockId);
    //   console.log({ block });
    // }

    console.log({ event });
  });

  // Add start block
  const dom = Blockly.Xml.textToDom(defaultWS);
  Blockly.Xml.domToWorkspace(dom, workspace);

  // function setChildrenDisabled(children) {
  //   children.setMovable(false);
  //   children.setDisabled(true);
  //   if (children.childBlocks_) {
  //     for (let i = 0; i <= children.childBlocks_.length - 1; i++) {
  //       setChildrenDisabled(children.childBlocks_[i]);
  //     }
  //   }
  // }

  // const block = workspace.getBlockById('kxqgtz6CHsFL2DSg.x:Q');
  // block.setMovable(false);
  // block.setDisabled(true);
  // const children = block.getChildren();
  // console.log({ children: children });
  // for (let i = 0; i <= children.length - 1; i++) {
  // console.log(children[i]);
  // children[i].setMovable(false);
  // children[i].setDisabled(true);
  // setChildrenDisabled(children[i]);
  // }

  const setVarBlock = workspace.getBlockById('as[[T;KOFx#=Moj]0Rbv');
  setVarBlock.setCommentText(
    'プログラムを2秒止める',
    null,
    null,
    null,
    true,
    true,
  );
  // setVarBlock.setHighlightBlock(true);

  const fBlock = workspace.getBlockById('nRZj=0d0rSnlCUqHi}GF');
  console.log({ fBlock });
  const coordinate = fBlock.getRelativeToSurfaceXY();
  setVarBlock.moveBy(coordinate.x, coordinate.y);

  fBlock.setInputHighlight(true);

  // const comment = new Blockly.ScratchBlockComment(
  //   setVarBlock,
  //   'Hello how are you',
  //   'kfuoieafuoeaiuff394832094sdjfw34',
  // );
  // new Blockly.ScratchBubble(comment, workspace, comment.createEditor_());
})();
