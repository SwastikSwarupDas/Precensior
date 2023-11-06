import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('* => isTop', slideTo('top')),
  transition('* => isBottom', slideTo('bottom')),
  transition('isTop => *', slideTo('bottom')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        optional
      ),
      query(':enter', [
        style({
          transform: direction === 'bottom' ? 'translateY(100%)' : `translate${direction.toUpperCase()}(-100%)`,
        }),
      ]),
      group([
        query(
          ':leave',
          [
            animate(
              '600ms ease',
              style({
                transform: direction === 'bottom' ? 'translateY(-100%)' : `translate${direction.toUpperCase()}(100%)`,
              })
            ),
          ],
          optional
        ),
        query(':enter', [animate('600ms ease', style({ transform: 'none' }))]),
      ]),
    ];
  }
  