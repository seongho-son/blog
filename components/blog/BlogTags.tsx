import { ExtraBoldText } from 'components/common/Text'
import React, { useEffect, useState } from 'react'

const tags = ['developer', 'traveler', 'promoter', 'producer']

export const BlogTags: React.FC = () => {
  const [tag, setTag] = useState(tags[0])
  useEffect(() => {
    let index = 0
    setInterval(() => {
      setTag(tags[index])
      index++
      if (index === 3) index = 0
    }, 2000)
  }, [])

  return <ExtraBoldText>#{tag}</ExtraBoldText>
}
