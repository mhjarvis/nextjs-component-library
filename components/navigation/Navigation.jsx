"use client"
import { FaAngleDown } from "react-icons/fa6"

import { useState } from "react"

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="">
			<div className="flex items-center justify-between w-30 border">
				<h5>Main Page</h5>
				<FaAngleDown />
			</div>
		</nav>
	)
}
