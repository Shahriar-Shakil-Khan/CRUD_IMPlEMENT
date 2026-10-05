const Footer = () => {
    return (
        <footer className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#ECEAE3]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-[#331A15] mb-3">Espresso Emporium</h1>
                    <p className="text-sm mb-4 text-[#331A15]">
                        Always ready to be your friend. Come &amp; Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className="flex gap-4 mt-2">
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook" className="hover:text-[#1877f3] transition">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2] transition">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.388 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram" className="hover:text-[#e4405f] transition">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.385 3.678 1.366c-.98.98-1.234 2.092-1.293 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.313 2.393 1.293 3.373.98.98 2.092 1.234 3.373 1.293C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.313 3.373-1.293.98-.98 1.234-2.092 1.293-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.313-2.393-1.293-3.373-.98-.98-2.092-1.234-3.373-1.293C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" aria-label="LinkedIn" className="hover:text-[#0077b5] transition">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:justify-end gap-10">
                    <div>
                        <h2 className="font-semibold mb-3 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5 text-[#331A15]">
                Copyright 2024 © <a href="https://prebuiltui.com" className="underline">PrebuiltUI</a>. All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;