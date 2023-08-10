import slugify from '@sindresorhus/slugify'
import developer from '../projects/developer'
import development from '../projects/development'
import project from '../projects/project'
import property from '../projects/property'

type DocumentType = typeof developer | typeof development | typeof project | typeof property

const generateId = (document: DocumentType) => {
  const type = document.type
  const title = document.title

  const slug = slugify(title)

  let prefix = ''
  switch (type) {
    case 'developer':
      prefix = 'D'
      break
    case 'development':
      prefix = 'DV'
      break
    case 'project':
      prefix = 'P'
      break
    case 'property':
      prefix = 'PR'
      break
    default:
      prefix = 'X'
  }

  return `${prefix}${slug}`
}

export default generateId
