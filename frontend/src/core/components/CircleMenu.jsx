import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx'

const menuItem = [
    'Пункт 1',
    'Пункт 2',
    'Пункт 3',
    'Пункт 4',
];

@observer
class CirleMenu extends React.Component {
    @observable block;
    @observable pointO;
    @observable finallyX;
    @observable finallyY;

    constructor() {
        super();

        this.shiftLeft = 0;
        this.shiftTop = 0;
        this.rCenterPoint = 4;
    };

    componentDidMount() {
        this.block = document.querySelector('.circle-wrapper').getBoundingClientRect();
        this.coordsCircle = document.querySelector('#pointO').getBoundingClientRect();

        if (this.block.left !== 0) this.shiftLeft = this.block.left;
        if (this.block.top !== 0) this.shiftTop = this.block.top;
    }

    getMenuItemCoords = () => {
        const menuItemAngel = menuItem.map((item, index) => {
            const angel = 2 * Math.PI / menuItem.length * index;

            return {
                x: this.props.rCircle * Math.cos(angel),
                y: this.props.rCircle * Math.sin(angel)
            };
        });

        return menuItemAngel;
    }

    handleMouseDown = () => {
        document.onmousemove = (event) => {
            this.coordX = event.clientX;
            this.coordY = event.clientY;
            // console.log('move', this.coordX, this.coordY);
            this.height = getComputedStyle(document.body).height;
            // alert(this.coordsCircle);

            this.height = this.height.slice(0, 3);
            this.coordY = this.height - this.coordY;
            // this.coords.textContent = 'X : ' + this.coordX + ' Y : ' + this.coordY;

            this.circleX = this.coordsCircle.left - this.rCenterPoint;
            this.circleY = this.height - this.coordsCircle.top + this.rCenterPoint;
            // this.circleY = this.coordsCircle.top + 0;
            // console.log('center', this.circleX - 40, this.circleY - 40);
            // console.log('circleY', this.circleY);

            if (this.coordX < this.circleX) {
                this.coordX -= this.circleX;
                this.coordY -= this.circleY;
                this.tg = this.coordY / this.coordX;
                this.angel = Math.atan(this.tg) + Math.PI;
            } else {
                this.coordX -= this.circleX;
                this.coordY -= this.circleY;
                this.tg = this.coordY / this.coordX;
                this.angel = Math.atan(this.tg);
            }
            console.log('angNew', this.angel);


            let sin = Math.sin(this.angel) * this.props.rCircle;

            const cos = (sin / Math.tan(this.angel)) + this.circleX;
            sin += this.circleY;

            this.finallyY = this.height - sin - this.shiftTop - this.props.rRunner + 1 + 'px';
            this.finallyX = cos - this.shiftLeft - this.props.rRunner + 1 + 'px';
        }

        document.onmouseup = () => {
            document.onmousemove = null;
        }
    };

    handleDragStart = () => false;

    render() {
        const menuItemAngels = this.getMenuItemCoords();
        // console.log('a', menuItemAngels);

        return (
            <div className='circle-wrapper'>
                <span
                    id='pointA'
                    className='pointA'
                    onMouseDown={this.handleMouseDown}
                    onDragStart={this.handleDragStart}
                    style={{
                        top: this.finallyY || -this.props.rRunner * 2,
                        left: this.finallyX || this.props.rCircle - this.props.rRunner * 2,
                        borderWidth: this.props.rRunner * 2,
                    }}
                />
                {menuItem.map((item, index) =>
                    <span
                        key={index}
                        style={{
                            top: menuItemAngels[index].y,
                            left: menuItemAngels[index].x,
                        }}
                        className='pointA'>
                    </span>
                )}
                <div className='circle'
                    style={{ height: this.props.rCircle * 2 - 1, width: this.props.rCircle * 2 - 1 }}
                >
                    <span id='pointO'
                        style={{
                            top: this.props.rCircle - this.rCenterPoint - 1,
                            left: this.props.rCircle - this.rCenterPoint - 1,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default CirleMenu;