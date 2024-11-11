import React from 'react'
import { Container } from 'react-bootstrap';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const icons = [
    {
        icon: <FaBars color={'red'} />
    },
    {
        icon: <FaTimes />
    },
    {
        icon: <FaChevronDown />
    },
    {
        icon: <FaChevronUp />
    }
]
export default function Icons() {
    return (
        <Container>
            <div className="d-flex">
                {icons.map((item, i) => (
                    <div key={i} className="col">{item.icon}</div>
                ))}
            </div>
        </Container>
    )
}