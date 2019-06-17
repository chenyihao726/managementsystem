let webpack = require('webpack');
module.exports = {
	//根目录
	context: __dirname + "",
	//文件入口
	entry: {
		index: './js/main.js',
		other: './js/other.js'
	},
	//文件出口
	output: {
		path: __dirname + "/dist", // 设置输出目录
		filename: '[name].bundle.js', // 输出文件名
	},
	module: {
		//加载器配置
		loaders: [
			//.css文件使用 style-loader 和 css-loader 来处理
			//【$ cnpm install css-loader style-loader --save-dev】命令行表示初始化style-loader, css-loader
			{ test: /\.css$/, loader: "style!css" },
			//图片文件使用 url-loader来处理，小于8kb的直接转为base64 
			//【$ cnpm install url-loader --save-dev】
			//【$ cnpm install file-loader --save-dev】
			// { test: /\.(jpeg|png|gif|svg)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]' },
			//字体文件使用 url-loader来处理，小于8kb的直接转为base64 
			//{ test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]' },
			//.js文件使用 babel-loader 来处理
			//【$ cnpm install babel-loader】
			//{ test: /\.js$/, loader: 'babel-loader' , exclude: /node_modules/},
			//.scss 文件使用 style-loader、css-loader 和 sass-loader 来处理
			//{ test: /\.js?$/, loader: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
			//{ test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
			//.less文件使用 style-loader、css-loader 和 less-loader来处理  
			//{ test: /\.less$/, loader: "style!css!less" },
			//.jsx文件使用 babel-loader来处理  
			//{ test: /\.jsx$/, loader: ['babel-loader'] , exclude: /(node_modules|bower_components)/}
			//【$ cnpm install --save-dev react-hot-loader】
			//【$ cnpm install --save-dev webpack-dev-server】
			//【$ cnpm install less --save-dev】命令行表示初始化less
			//【$ cnpm install css-loader style-loader --save-dev】命令行表示初始化style-loader, css-loader
			//【$ cnpm install less less-loader --save-dev】命令行表示初始化less-loader， 基于style-loader,css-loader
		]
	},
	// 插件
	plugins: [
		// 默认会把所有入口节点的公共代码提取出来,生成一个common.js
		new webpack.optimize.CommonsChunkPlugin('common'),
		// 压缩代码抬头注释
		new webpack.BannerPlugin('此处添加打包抬头注释!'),
		// 代码压缩
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	//其它解决方案配置
	resolve: {
		// 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀。如require("common")
		extensions: ['.js', '.jsx', '.coffee']
	},
	//由于压缩后的代码不易于定位错误，配置该项后发生错误时即可采用source-map的形式直接显示你出错代码的位置。
	devtool: 'eval-source-map'
}