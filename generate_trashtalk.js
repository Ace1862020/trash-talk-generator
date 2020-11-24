// random index
function choose(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(options) {
  // 定義辭庫
  const task = {
    engineer: ['加個按鈕', '新增功能', '切個版', '改一些code'],
    designer: ['畫一張圖', '改個logo', '順便設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '會賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['應該很簡單吧', '應該很容易吧', '還好而已吧', '算很正常吧']

  // create collection
  let collection = []
  let colleagueName = ''
  if (options.colleague === 'engineer') {
    colleagueName = '身為一位工程師'
    collection = collection.concat(task.engineer)
  }
  if (options.colleague === 'designer') {
    colleagueName = '身為一位設計師'
    collection = collection.concat(task.designer)
  }
  if (options.colleague === 'entrepreneur') {
    colleagueName = '身為一位創業家'
    collection = collection.concat(task.entrepreneur)
  }
  if (collection.length === 0) {
    return '說點什麼吧!! 今天你一定要造點口業'
  }

  // Generate trash-talk
  let trashTalk = ''
  trashTalk += `${colleagueName}，${choose(collection)}，${choose(phrase)}`

  // return
  return trashTalk
}

module.exports = generateTrashTalk