import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"

export const tnsCarousell = () => {
  let slider = tns({
    container: '#tnsCarousell',
    items: 1,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    edgePadding: 40,
    nav: false,
    mouseDrag: true,
    controlsText: [
      '<i class="tns-carousell__prev fas fa-chevron-left"></i>',
      '<i class="tns-carousell__next fas fa-chevron-right"></i>'
    ],
    responsive: {
      320: {
        items: 4
      },
      640: {
        items: 5
      },
      800: {
        items: 6
      },
      960: {
        items: 7
      },
      1120: {
        items: 8
      }
    }
  });
};

export const tnsSingle = () => {
  let slider = tns({
    container: '#tnsSingle',
    items: 1,
    slideBy: 1,
    speed: 1000,
    mode: 'gallery',
    mouseDrag: true,
    controlsText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  });
};

export const tnsPromotion = () => {
  let slider = tns({
    container: '#tnsPromotion',
    items: 1,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    edgePadding: 40,
    nav: false,
    mouseDrag: true,
    controlsText: [
      '<i class="tns-promotion__prev fas fa-chevron-left"></i>',
      '<i class="tns-promotion__next fas fa-chevron-right"></i>'
    ],
    responsive: {
      320: {
        items: 1
      },
      960: {
        items: 3
      }
    }
  });
};