import React, { useRef, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Swiper, Toast } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

import styles from './index.less'
import axios from 'axios'


export default function Index() {
  const [swipList, setSwipList] = useState([]);
  const history = useHistory()

  useEffect(() => {
    getSwiperDatas();
  }, []);

  
  function getSwiperDatas() {
    axios.get('http://localhost:8080/home/swiper').then((res)=>{
      console.log('结果为：',res);
      setSwipList([...res.data.body])
    })
  }

  // const ref = useRef<SwiperRef>(null)
   return (
      <div title='基础用法' 
        style={{width: '100%', height: '100%'}}>
        <Swiper autoplay loop autoplayInterval={2000}>
          {
            swipList.map((item, index) => {
              return <Swiper.Item key={item.id}>
                      <div
                        className={styles.content}
                        style={{height: 200}}
                        onClick={() => {
                          Toast.show(`你点击了卡片 ${index + 1}`)
                        }}
                      >
                        <a href="http://www.baidu.com">
                            <img src={`http://localhost:8080${item.imgSrc}`} 
                                alt={item.alt} 
                                style={{width:'100%', verticalAlign: 'top'}}></img>
                        </a>
                        
                      </div>
                    </Swiper.Item>
            })
          }
        </Swiper>
        
      </div>
   );
}
