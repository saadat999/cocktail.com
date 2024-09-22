
import React, { useEffect, useState } from 'react'
import { Card, Typography } from 'antd';
import { SmileFilled, SmileOutlined } from '@ant-design/icons';
import Header from '../UI/header/Header';
import Footer from '../UI/footer/Footer';



const CocktailList = () => {
  const id = localStorage.getItem('id')
  const [data, setData] = useState([])
  console.log(data, '----------usestate----------');
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;



  const base_url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  useEffect(() => {
    fetchCategory()
  }, [])

  const fetchCategory = () => {
    fetch(base_url + id)
      .then(res => res.json())
      .then(res => {
        console.log(res, '-----------data----------------');
        setData(res.drinks)

      })
  }

  return (
    <div>
      {data.map(el => {
        return (
          <div>
            <Header/>
            <Card
              hoverable
              style={{
                width: 240,
                marginBottom: 100,
                marginTop: 100,
              }}
              cover={<img alt="example" src={el.strDrinkThumb} />}
            >
              <Meta title={el.strDrink}  />
              <Paragraph copyable>{el.strInstructions}</Paragraph>

            </Card>

            <Footer/>
          </div>
        )

      })}
    </div>
  )
}
export default CocktailList;
