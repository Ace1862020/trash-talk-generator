// random index
function choose(array) {
  const index = Math.floor(Math.random() * array.length)
  console.log('array', array)
  return array[index]
}

function generateTrashTalk(option) {
  // 定義詞庫
  const colleagueName = {
    engineer: '身為一位工程師',
    designer: '身為一位設計師',
    entrepreneur: '身為一位創業家'
  }

  const task = {
    engineer: ['加個按鈕', '新增功能', '切個版', '改一些code'],
    designer: ['畫一張圖', '改個logo', '順便設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '會賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['應該很簡單吧', '應該很容易吧', '還好而已吧', '算很正常吧']

  // Generate trash-talk
  let trashTalk = ''

  if (option === '' || option === null || option === undefined) {
    return '說點什麼吧!! 今天你一定要造點口業'
  }

  trashTalk += `${colleagueName[option]}，${choose(task[option])}，${choose(phrase)}`

  // return
  return trashTalk
}

module.exports = generateTrashTalk