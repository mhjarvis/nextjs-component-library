"use client"
import { FaAngleDown } from "react-icons/fa6"

import { useState } from "react"

export default function Navigation() {
	const [openDropdown, setOpenDropdown] = useState(null)

	const toggleDropdown = (menu) => {
		setOpenDropdown(openDropdown === menu ? null : menu)
	}

	return (
		<nav className="">
			<div className="relative flex items-center justify-between w-30 border">
				<button
					onClick={() => toggleDropdown("mainPage")}
					className="flex items-center hover:bg-blue-700 px-3 py-1"
				>
					Main Page
				</button>
				<FaAngleDown />
				{openDropdown === "mainPage" && (
					<div className="absolute mt-10 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
						<a href="#" className="block px-4 py-2 hover:bg-gray-100">
							Web Design
						</a>
						<a href="#" className="block px-4 py-2 hover:bg-gray-100">
							SEO
						</a>
						<a href="#" className="block px-4 py-2 hover:bg-gray-100">
							Consulting
						</a>
					</div>
				)}
			</div>
		</nav>
	)
}
