import Vue from 'vue'

Vue.mixin({
  methods: {
    setFontColor(id) {
      if(!id) return
      // let v = String(id).slice(-1)
      let v= Number(id)%12;
      switch (v) {
        case 1:
          return '#0098E7'
        case 2:
          return '#5C75E4'
        case 3:
          return '#001182'
        case 4:
          return '#145799'
        case 5:
          return '#006640'
        case 6:
          return '#00C7BB'
        case 7:
          return '#FFD100'
        case 8:
          return '#F8B236'
        case 9:
          return '#D76B26'
        case 10:
          return '#D82C00'
        case 11:
          return '#EA00CC'
        case 0:
          return '#AE55AA'

      }

    },
    setColor(id) {
      if(!id) return
      // let v = String(id).slice(-1)
      let v= Number(id)%12;
      switch (v) {
        case 1:
          return '0,152,231,.2'
        case 2:
          return '92,117,228,.2'
        case 3:
          return '0,17,130,.2'
        case 4:
          return '20,87,153,.2'
        case 5:
          return '0,102,64,.2'
        case 6:
          return '0,199,187,.2'
        case 7:
          return '255,209,0,.2'
        case 8:
          return '248,178,54,.2'
        case 9:
          return '215,107,38,.2'
        case 10:
          return '216,44,0,.2'
        case 11:
          return '234,0,204,.2'
        case 0:
          return '174,85,170,.2'
      }

    }
  }
})
