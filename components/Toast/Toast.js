import Toast from 'react-native-toast-message'

export const showToastSuccess = (text1, text2) => {
  Toast.show({
    type: "imovimSuccess", // tipo da mensagem
    text1: text1, // titulo
    text2: text2, //descrição
    autoHide: true, // ocultar automaticamente ou não
    visibilityTime: 1500, // tempo de exibição do toasty
    position: 'top', // de onde a mensagem vai aparecer
  })
}

export const showToastError = (text1, text2) => {
  Toast.show({
    type: "imovimError", // tipo da mensagem
    text1: text1, // titulo
    text2: text2, //descrição
    autoHide: true, // ocultar automaticamente ou não
    visibilityTime: 5500, // tempo de exibição do toasty
    position: 'top', // de onde a mensagem vai aparecer
  })
}