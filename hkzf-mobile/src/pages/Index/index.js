import React, { useRef } from 'react'
import { Swiper, Toast } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

import styles from './index.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color, height: 200 }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))


export default function Index() {
  // const ref = useRef<SwiperRef>(null)
   return (
      <div title='基础用法' 
        style={{width: '100%', height: '100%'}}>
        <Swiper autoplay loop autoplayInterval={1000}>{items}</Swiper>
      </div>
   );
}
