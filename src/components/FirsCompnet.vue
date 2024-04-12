<template>
  <div class="w-full h-screen bg-colorOne relative">
    <img src="/public/logo.svg" alt="logo" class="absolute top-[6%] left-[30%]  md:top-[20%] md:left-[45%] ">
    <img src="../assets/hero_img.jpg" alt="" class=" lg:h-3/5 h-[45%] w-full object-cover lg:object-fill">
    <div class=" w-full  bg-transparent -mt-60 lg:-mt-40 gap-5 lg:gap-0  grid  lg:grid-cols-2  place-items-center ">
      <aside class="flex flex-col items-center w-[85%] bg-colorEigh lg:ml-20 h-72 lg:h-80 rounded-3xl">
        <div class="w-11/12 mt-2 h-1/4 bg-transparent ">
          <div class="w-full flex  sm:gap-5  ml-5 mt-3  ">
           
            <p v-for="item in lengueges" :key="item.searchAPI" @click="cambiarLangPairFrom(item.searchAPI,)" :style="item.searchAPI === langpair.taducirFrom ? 'background-color:#4D5562; color: white; ' : null "
      class="text-colorTree transition-all ease-linear cursor-pointer  p-2 font-semibold text-[14px] hover:text-colorFive hover:bg-colorTree rounded-xl"
            >
              
              {{ item.lenguege }}</p>

           
          </div>
          <hr class="w-full h-px mt-4 bg-colorTwo border-0  ">

        </div>

        <div class="w-11/12 h-2/5 relative ">
          <textarea v-model="translate"
            class="w-full h-full transition-all ease-linear bg-transparent outline-none resize-none text-colorFive text-[17px] font-light"></textarea>
          <span
            class="absolute top-[105px] sm:top-[134px] right-[15px] sm:right-[10px] text-colorTree text-[13px] font-medium">{{translate.length}}/500</span>
        </div>
        <div class=" w-11/12 h-1/4 flex justify-between pt-7">
          <div class="flex h-4 gap-2 pt-4">
            <span @click="speak" class="p-2 h-9 border border-colorTree rounded-xl cursor-pointer">
              <img src="../assets/sound_max_fill.svg" class="" alt="soung">
            </span>
            <span @click="copiarTexto(translate, 1)" class=" flex justify-center items-center p-2 h-9 border border-colorTree rounded-xl text-white text-[9px] cursor-pointer">
              <p v-if="mensaje.mj.length > 1">{{ mensaje.mj }}!</p>
              <img v-else src="../assets/Copy.svg" class="" alt="soung">
            </span>

          </div>
          <button @click="askForTranslation"
            class="flex justify-center items-center text-colorFive w-40 h-12 bg-colorSix border border-colorSeven rounded-xl mr-2">
            <img src="../assets/Sort_alfa.svg" alt=""> Translate
          </button>
        </div>
      </aside>
      <aside class="flex flex-col items-center w-[85%] lg:mr-20 h-72 lg:h-80  rounded-3xl bg-colorNine">
        <div class="w-11/12 mt-2 h-1/4 bg-transparent ">
          <div class="w-full flex  justify-between sm:gap-5  ml-5 mt-3  ">
            <div class="flex">
             
              <p v-for="item in lengueges" :key="item.searchAPI" @click="cambiarLangPairTo(item.searchAPI)" :style="item.searchAPI === langpair.traducidoTo ? 'background-color:#4D5562; color: white; ' : null "
      class="text-colorTree transition-all ease-linear cursor-pointer p-2 font-semibold text-[14px] hover:text-colorFive hover:bg-colorTree rounded-xl"
            >
              
              {{ item.lenguege }}</p>
            </div>
            <span  @click="cambio" class="p-2 h-9 border border-colorTree rounded-xl mr-6 cursor-pointer">
              <img  src="../assets/Horizontal_top_left_main.svg" alt="">
            </span>

          </div>
          <hr class="w-full h-px mt-4 bg-colorTwo border-0  ">

        </div>

        <div class="w-11/12 h-2/5 relative ">
          <span class="w-full h-full transition-all ease-linear bg-transparent outline-none  text-[17px] resize-none text-colorFive font-normal">{{
            translation }}</span>

        </div>
        <div class=" w-11/12 h-1/4 flex justify-between pt-7">
          <div class="flex h-4 gap-2 pt-4">
            <span @click="speakDos" class="p-2 h-9 border border-colorTree rounded-xl cursor-pointer">
              <img src="../assets/sound_max_fill.svg" class="" alt="soung">
            </span>
            <span @click="copiarTexto(translation, 2)" class=" flex justify-center items-center p-2 h-9 border border-colorTree rounded-xl text-white text-[9px] cursor-pointer">
              <p v-if="mensaje.mjd.length > 1">{{ mensaje.mjd }}!</p>
              <img v-else src="../assets/Copy.svg" class="" alt="soung">
            </span>

          </div>

        </div>
      </aside>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const lengueges = ref([
{
    lenguege: 'Spanis',
    searchAPI: 'es'
  },
  {
    lenguege: 'English',
    searchAPI: 'en'
  },
 
  {
    lenguege: 'French',
    searchAPI: 'fr'
  },
  {
    lenguege: 'Italian',
    searchAPI: 'it'
  },
  

 
])
const translate = ref('')
const translation = ref('')
const langpair = ref({
  taducirFrom: 'es',
  traducidoTo: 'en'
})

const cambiarLangPairFrom  = (leng) => {
  langpair.value.taducirFrom = leng
  const newL = lengueges.value.filter(item => item.searchAPI !== leng)
  langpair.value.traducidoTo =  newL[0].searchAPI;
}

const mensaje = ref({
  mj: '',
  mjd: ''
})

function copiarTexto(texto, fist) {
  if(fist === 1) {
    navigator.clipboard.writeText(texto).then(() => {
    // Mensaje de éxito
    mensaje.value.mj = 'Copiado'
   setTimeout(() => {
    mensaje.value.mj = ''
   },2000)
  }, () => {
    // Mensaje de error
    mensaje.value.mj = 'Error'
    setTimeout(() => {
    mensaje.value.mj = ''
   },2000)
  });
  } 

  if(fist ===  2) {
    {
    navigator.clipboard.writeText(texto).then(() => {
    // Mensaje de éxito
    mensaje.value.mjd = 'Copiado'
   setTimeout(() => {
    mensaje.value.mjd = ''
   },2000)
  }, () => {
    // Mensaje de error
    mensaje.value.mjd = 'Error'
    setTimeout(() => {
    mensaje.value.mjd = ''
   },2000)
  });
  }
  }
}

const cambiarLangPairTo  = (leng) => {

  langpair.value.traducidoTo = leng
  askForTranslation()
}

const speak = () => {
      // Crear una nueva instancia de la API SpeechSynthesis
      const speechSynthesis = window.speechSynthesis;

      // Crear una nueva instancia de SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance();

      // Configurar el texto a pronunciar
      utterance.text = translate.value;

      // Configurar la voz
      utterance.voice = speechSynthesis.getVoices()[0]; // Selecciona la primera voz disponible

      // Configurar la velocidad
      utterance.rate = 1; // Velocidad normal

      // Reproducir el texto
      speechSynthesis.speak(utterance);
    }

    const speakDos = () => {
      // Crear una nueva instancia de la API SpeechSynthesis
      const speechSynthesis = window.speechSynthesis;

      // Crear una nueva instancia de SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance();

      // Configurar el texto a pronunciar
      utterance.text = translation.value;

      // Configurar la voz
      utterance.voice = speechSynthesis.getVoices()[1]; // Selecciona la primera voz disponible

      // Configurar la velocidad
      utterance.rate = 1; // Velocidad normal

      // Reproducir el texto
      speechSynthesis.speak(utterance);
    }



const cambio =  ()=> {
  const reserv = langpair.value.traducidoTo
  langpair.value.traducidoTo = langpair.value.taducirFrom
  langpair.value.taducirFrom = reserv
 const reserva = translate.value  
 translate.value=translation.value
 translation.value=reserva
}

async function askForTranslation() {

  fetch(`https://api.mymemory.translated.net/get?q=${translate.value}!&langpair=${langpair.value.taducirFrom}|${langpair.value.traducidoTo}`)
    .then(response => response.json())
    .then(data => {
      translation.value = data.responseData.translatedText
       
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}

</script>


<style scoped></style>