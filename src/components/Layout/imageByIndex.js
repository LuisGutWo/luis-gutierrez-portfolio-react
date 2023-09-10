import image1 from '../../assets/images/landing-page-gatos.png'
import image2 from '../../assets/images/desafio-git.png'
import image3 from '../../assets/images/iguana-page-desafio.png'
import image4 from '../../assets/images/desafio_grid_template.png'
import image5 from '../../assets/images/huellitas_screenshot_new.png'

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex