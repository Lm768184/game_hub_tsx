import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "4b33f5fc19e74d69aff99aa6aeaa320d",
  },
  
})
