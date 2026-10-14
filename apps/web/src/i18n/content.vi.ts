import type { PromptTemplateSummary } from '../types';

export const VI_SKILL_COPY: Record<string, { description?: string; examplePrompt?: string }> = {
  '8-bit-orbit-video-template': {
    description: 'Mẫu video dựa trên Hyperframes để thiết kế chuyển động cho bộ trình chiếu phong cách pixel hoài cổ. Dùng khi người dùng muốn bố cục HTML-to-video nhiều cảnh, độ trung thực cao, chuyển cảnh nâng cao, điều khiển xem trước tương tác và phong cách có sẵn để kết xuất.',
    examplePrompt: 'Tạo bộ video Hyperframes 3 trang phong cách 8-bit hoài cổ, có chuyển cảnh nâng cao, chuyển động phong phú và mỗi trang dài dưới 3 giây.',
  },
  'ad-creative': {
    description: 'Tạo và chỉnh sửa nội dung quảng cáo gồm tiêu đề, mô tả và nội dung chính. Hữu ích khi tối ưu quảng cáo mạng xã hội trả phí và quảng cáo tìm kiếm.',
    examplePrompt: 'Tạo và chỉnh sửa nội dung quảng cáo gồm tiêu đề, mô tả và nội dung chính.',
  },
  'after-hours-editorial-template': {
    description: 'Mẫu HyperFrames phong cách biên tập tối sang trọng cho storyboard điện ảnh ba trang, lấy cảm hứng từ thẻ tiêu đề thời trang cao cấp và trang mở đầu chương của tạp chí. Dùng khi người dùng muốn trang chuyển động phong cách thời trang cao cấp, kể chuyện giàu cảm xúc với chữ serif hoặc diện mạo trình chiếu tối cao cấp cùng chuyển cảnh phong phú.',
    examplePrompt: 'Tạo chuỗi biên tập HyperFrames ba trang theo phong cách haute couture tối: kiểu chữ serif cao cấp, điểm nhấn màu magenta, chuyển cảnh chương thanh lịch và hạt nhiễu điện ảnh. Giữ mỗi trang dưới 3 giây.',
  },
  'agent-browser': {
    description: 'CLI tự động hóa trình duyệt dành cho agent AI. Dùng khi cần kiểm tra, thử nghiệm hoặc tự động hóa trình duyệt: điều hướng trang, điền biểu mẫu, nhấp nút, chụp ảnh màn hình, trích xuất dữ liệu, đọc ngữ cảnh tab trình duyệt được chọn trong OpenDesign, thử nghiệm ứng dụng web, tự kiểm tra bản xem trước OpenDesign, QA, tìm lỗi hoặc đánh giá chất lượng ứng dụng. Ưu tiên URL xem trước cục bộ của OpenDesign trừ khi người dùng yêu cầu rõ việc duyệt web bên ngoài.',
    examplePrompt: 'CLI tự động hóa trình duyệt dành cho agent AI.',
  },
  'ai-music-album': {
    description: 'Sản xuất trọn quy trình album nhạc AI — ý tưởng, viết lời, sắp xếp thứ tự bài hát và xuất bản. Hữu ích cho thử nghiệm album indie và nhạc nền thương hiệu.',
    examplePrompt: 'Sản xuất trọn quy trình album nhạc AI — ý tưởng, viết lời, sắp xếp thứ tự bài hát và xuất bản.',
  },
  'algorithmic-art': {
    description: 'Tạo nghệ thuật sinh bằng p5.js với tính ngẫu nhiên dựa trên seed để mỗi lần kết xuất đều có thể tái tạo. Hữu ích cho poster tạo theo quy tắc, ảnh tĩnh phong cách chuyển động và nghiên cứu khung hình nghệ thuật.',
    examplePrompt: 'Tạo nghệ thuật sinh bằng p5.js với tính ngẫu nhiên dựa trên seed để mỗi lần kết xuất đều có thể tái tạo.',
  },
  'apple-hig': {
    description: 'Apple Human Interface Guidelines dưới dạng 14 kỹ năng cho agent, bao quát nền tảng, nguyên tắc cơ bản, thành phần, mẫu, phương thức nhập liệu và công nghệ cho iOS, macOS, visionOS, watchOS và tvOS.',
    examplePrompt: 'Apple Human Interface Guidelines dưới dạng 14 kỹ năng cho agent, bao quát nền tảng, nguyên tắc cơ bản, thành phần, mẫu, phương thức nhập liệu và công nghệ cho iOS, macOS, visionOS, watchOS và tvOS.',
  },
  'article-magazine': {
    description: 'Bố cục bài viết tạp chí lấy cảm hứng từ Huashu / huashu-md-html, giúp chuyển Markdown hoặc ghi chú thành bài luận HTML dài được trau chuốt.',
    examplePrompt: 'Dùng mẫu Magazine Article để chuyển nội dung của tôi thành bài luận HTML dài lấy cảm hứng từ Huashu / huashu-md-html. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'artifacts-builder': {
    description: 'Bộ công cụ tạo sản phẩm HTML nhiều thành phần phức tạp cho claude.ai bằng công nghệ web giao diện hiện đại (React, Tailwind CSS, shadcn/ui).',
    examplePrompt: 'Bộ công cụ tạo sản phẩm HTML nhiều thành phần phức tạp cho claude.ai bằng công nghệ web giao diện hiện đại (React, Tailwind CSS, shadcn/ui).',
  },
  'brainstorming': {
    description: 'Biến ý tưởng sơ khởi thành thiết kế hoàn chỉnh thông qua đặt câu hỏi có cấu trúc và khám phá phương án thay thế. Hữu ích ở giai đoạn đầu hình thành ý tưởng.',
    examplePrompt: 'Biến ý tưởng sơ khởi thành thiết kế hoàn chỉnh thông qua đặt câu hỏi có cấu trúc và khám phá phương án thay thế.',
  },
  'brand-guidelines': {
    description: 'Áp dụng màu sắc và kiểu chữ thương hiệu chính thức của Anthropic vào sản phẩm để tạo nhận diện hình ảnh nhất quán và đạt chuẩn thiết kế chuyên nghiệp. Dùng làm tài liệu tham khảo để định hình thương hiệu của bạn.',
    examplePrompt: 'Áp dụng màu sắc và kiểu chữ thương hiệu chính thức của Anthropic vào sản phẩm để tạo nhận diện hình ảnh nhất quán và đạt chuẩn thiết kế chuyên nghiệp.',
  },
  'brandkit': {
    description: 'Kỹ năng tạo hình ảnh cao cấp cho bộ nhận diện thương hiệu, dùng để tạo bảng hướng dẫn thương hiệu, hệ thống logo, bộ trình chiếu nhận diện và phần trình bày thế giới hình ảnh. Được huấn luyện cho phong cách thương hiệu tối giản, điện ảnh, biên tập, công nghệ tối, sang trọng, văn hóa, bảo mật, trò chơi, công cụ cho nhà phát triển và ứng dụng tiêu dùng. Tối ưu cho ý tưởng logo có chủ đích, bố cục tinh tế, kiểu chữ tiết chế, ý nghĩa biểu tượng rõ nét, mô hình trình bày cao cấp, hình ảnh có định hướng nghệ thuật và bố cục lưới linh hoạt.',
    examplePrompt: 'Tạo ảnh tổng quan bộ nhận diện thương hiệu cao cấp cho sản phẩm này, gồm định hướng logo, bảng màu, kiểu chữ, ứng dụng và thế giới hình ảnh nhất quán.',
  },
  'industrial-brutalist-ui': {
    description: 'Giao diện cơ khí thô ráp kết hợp kiểu chữ Thụy Sĩ với thẩm mỹ thiết bị đầu cuối quân sự. Lưới cứng, tương phản cực mạnh về cỡ chữ, màu sắc thực dụng và hiệu ứng xuống cấp tương tự kỹ thuật analog. Dành cho bảng điều khiển nhiều dữ liệu, portfolio hoặc trang biên tập cần tạo cảm giác như tài liệu vừa được giải mật.',
    examplePrompt: 'Tạo giao diện brutalist công nghiệp với lưới cứng, họa tiết đo từ xa chiến thuật, kiểu chữ mạnh và độ chính xác cơ khí.',
  },
  'canvas-design': {
    description: 'Tạo tác phẩm thị giác đẹp trong tài liệu PNG và PDF, vận dụng triết lý thiết kế và nguyên tắc thẩm mỹ cho poster, minh họa và tác phẩm tĩnh.',
    examplePrompt: 'Tạo tác phẩm thị giác đẹp trong tài liệu PNG và PDF, vận dụng triết lý thiết kế và nguyên tắc thẩm mỹ cho poster, minh họa và tác phẩm tĩnh.',
  },
  'card-twitter': {
    description: 'Thẻ trích dẫn hoặc dữ liệu Twitter được thiết kế để đăng kèm một bài viết.',
    examplePrompt: 'Dùng mẫu Twitter Share Card để chuyển nội dung của tôi thành thẻ trích dẫn hoặc dữ liệu Twitter đăng kèm bài viết. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'card-xiaohongshu': {
    description: 'Thẻ kiến thức phong cách Xiaohongshu, sắp xếp thành chuỗi nhiều thẻ có thể vuốt.',
    examplePrompt: 'Dùng mẫu Xiaohongshu Card để chuyển nội dung của tôi thành chuỗi thẻ kiến thức phong cách Xiaohongshu có thể vuốt. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'color-expert': {
    description: 'Kỹ năng chuyên sâu về khoa học màu sắc với 286K từ tài liệu tham khảo, bao gồm OKLCH/OKLAB, tạo bảng màu, khả năng tiếp cận/tương phản, đặt tên màu, pha sắc tố và lý thuyết màu sắc lịch sử.',
    examplePrompt: 'Kỹ năng chuyên sâu về khoa học màu sắc với 286K từ tài liệu tham khảo, bao gồm OKLCH/OKLAB, tạo bảng màu, khả năng tiếp cận/tương phản, đặt tên màu, pha sắc tố và lý thuyết màu sắc lịch sử.',
  },
  'competitive-ads-extractor': {
    description: 'Trích xuất và phân tích quảng cáo của đối thủ từ thư viện quảng cáo để hiểu thông điệp và cách sáng tạo nào đang hiệu quả.',
    examplePrompt: 'Trích xuất và phân tích quảng cáo của đối thủ từ thư viện quảng cáo để hiểu thông điệp và cách sáng tạo nào đang hiệu quả.',
  },
  'copywriting': {
    description: 'Viết và viết lại nội dung tiếp thị cho trang đích, trang chủ và quảng cáo. Hữu ích như cộng sự phụ trách nội dung chính trong các đợt ra mắt.',
    examplePrompt: 'Viết và viết lại nội dung tiếp thị cho trang đích, trang chủ và quảng cáo.',
  },
  'creative-director': {
    description: 'Giám đốc sáng tạo AI với cơ chế tự đánh giá lặp: hơn 20 phương pháp (SIT, TRIZ, liên kết xa, SCAMPER, sáng tạo đồng vận), chấm điểm theo 3 trục hiệu chỉnh theo Cannes/D&AD/HumanKind và quy trình 5 giai đoạn từ bản mô tả đến bài thuyết trình.',
    examplePrompt: 'Giám đốc sáng tạo AI với cơ chế tự đánh giá lặp: hơn 20 phương pháp (SIT, TRIZ, liên kết xa, SCAMPER, sáng tạo đồng vận), chấm điểm theo 3 trục hiệu chỉnh theo Cannes/D&AD/HumanKind và quy trình 5 giai đoạn từ bản mô tả đến bài thuyết trình.',
  },
  'd3-visualization': {
    description: 'Hướng dẫn agent tạo biểu đồ D3 và trực quan hóa dữ liệu tương tác. Kỹ năng D3.js toàn diện với ví dụ về các loại biểu đồ và kỹ thuật, trang bị kiến thức chuyên sâu để tạo trực quan hóa phức tạp, tương tác. Hữu ích cho bảng điều khiển biên tập, báo cáo, nguyên mẫu nhiều dữ liệu và đồ họa giải thích.',
    examplePrompt: 'Hướng dẫn agent tạo biểu đồ D3 và trực quan hóa dữ liệu tương tác.',
  },
  'data-report': {
    description: 'Biến dữ liệu CSV, Excel hoặc JSON thành trang báo cáo trực quan được trau chuốt.',
    examplePrompt: 'Dùng mẫu Data Visualization Report để chuyển dữ liệu CSV, Excel hoặc JSON của tôi thành trang báo cáo trực quan được trau chuốt. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'deck-guizang-editorial': {
    description: 'Phong cách tạp chí biên tập kết hợp giấy điện tử: 10 bố cục và 5 bảng màu (Ink, Indigo Porcelain, Forest Ink, Kraft Paper, Dune).',
    examplePrompt: 'Dùng mẫu Guizang Editorial E-Ink Deck để chuyển nội dung của tôi thành bộ trình chiếu ngang phong cách tạp chí biên tập kết hợp giấy điện tử, với 10 bố cục và 5 bảng màu. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'deck-open-slide-canvas': {
    description: 'Bộ trình chiếu trên canvas cố định 1920x1080, cho phép bố cục tự do ở cấp thành phần React thay vì bị giới hạn bởi một mẫu cố định.',
    examplePrompt: 'Dùng mẫu Open-Slide 1920 Canvas Deck để chuyển nội dung của tôi thành bộ trình chiếu bố cục tự do, cố định ở 1920x1080 với bố cục cấp thành phần React. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'deck-swiss-international': {
    description: 'Lưới 16 cột, một màu nhấn bão hòa và 22 bố cục cố định (Klein Blue, Lemon, Mint, Safety Orange).',
    examplePrompt: 'Dùng mẫu Swiss International Deck để chuyển nội dung của tôi thành bộ trình chiếu có lưới 16 cột, một màu nhấn bão hòa và 22 bố cục cố định. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'design-brief': {
    description: 'Phân tích bản mô tả thiết kế có cấu trúc theo định dạng giao thức I-Lang và chuyển thành đặc tả thiết kế cụ thể. Loại bỏ sự mơ hồ trong yêu cầu chung chung như "làm cho chuyên nghiệp" bằng cách xác định rõ bảng màu, kiểu chữ, bố cục, sắc thái, mật độ và ràng buộc. Từ khóa kích hoạt: "design brief", "create a design brief", "ilang brief", "structured brief".',
    examplePrompt: 'Phân tích bản mô tả thiết kế có cấu trúc theo định dạng giao thức I-Lang và chuyển thành đặc tả thiết kế cụ thể.',
  },
  'design-consultation': {
    description: 'Xây dựng hệ thống thiết kế hoàn chỉnh từ đầu với thử nghiệm sáng tạo và mô hình sản phẩm chân thực. Hữu ích cho workshop khởi động và dự án xây dựng thương hiệu từ con số không.',
    examplePrompt: 'Xây dựng hệ thống thiết kế hoàn chỉnh từ đầu với thử nghiệm sáng tạo và mô hình sản phẩm chân thực.',
  },
  'design-md': {
    description: 'Tạo và quản lý tệp DESIGN.md. Hữu ích để ghi lại định hướng thiết kế, token và quy tắc hình ảnh trong một nguồn chuẩn duy nhất.',
    examplePrompt: 'Tạo và quản lý tệp DESIGN.md.',
  },
  'design-review': {
    description: 'Nhà thiết kế biết lập trình: kiểm tra hình ảnh rồi sửa bằng các commit riêng biệt và ảnh chụp trước/sau. Hữu ích để hoàn thiện giao diện trước khi ra mắt.',
    examplePrompt: 'Nhà thiết kế biết lập trình: kiểm tra hình ảnh rồi sửa bằng các commit riêng biệt và ảnh chụp trước/sau.',
  },
  'digits-fintech-swiss-template': {
    description: 'Mẫu bộ trình chiếu fintech với lưới Thụy Sĩ, tương phản đen / giấy ấm / xanh chanh neon. Dùng khi người dùng cần slide kể chuyện dữ liệu cao cấp, bố cục mô-đun chặt chẽ, thẻ số liệu nổi bật, chuyển động tiết chế và điều hướng bằng bàn phím/nhấp chuột trong một tệp HTML.',
    examplePrompt: 'Tạo bộ trình chiếu chiến lược fintech với lưới Thụy Sĩ, thẻ dữ liệu mô-đun, điểm nhấn xanh chanh và điều hướng bàn phím gọn gàng.',
  },
  'doc': {
    description: 'Đọc, tạo và chỉnh sửa tài liệu .docx, giữ nguyên độ trung thực định dạng và bố cục bằng kỹ năng document của OpenAI.',
    examplePrompt: 'Đọc, tạo và chỉnh sửa tài liệu .docx, giữ nguyên độ trung thực định dạng và bố cục bằng kỹ năng document của OpenAI.',
  },
  'doc-kami-parchment': {
    description: 'Canvas màu giấy da ấm (#f5f4ed), điểm nhấn đơn sắc xanh mực (#1B365D), một họ chữ serif duy nhất và kiểu chữ chuẩn biên tập.',
    examplePrompt: 'Dùng mẫu Kami Parchment Document để chuyển nội dung của tôi thành tài liệu nền giấy da ấm với điểm nhấn xanh mực đơn sắc, một họ chữ serif duy nhất và kiểu chữ chuẩn biên tập. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'docx': {
    description: 'Tạo, chỉnh sửa và phân tích tài liệu Word với theo dõi sửa đổi, bình luận và định dạng. Hữu ích cho bản mô tả thiết kế, tài liệu văn bản và sản phẩm bàn giao sẵn sàng để duyệt.',
    examplePrompt: 'Tạo, chỉnh sửa và phân tích tài liệu Word với theo dõi sửa đổi, bình luận và định dạng.',
  },
  'domain-name-brainstormer': {
    description: 'Tạo ý tưởng tên miền sáng tạo và kiểm tra tính khả dụng trên nhiều TLD, gồm .com, .io, .dev và .ai.',
    examplePrompt: 'Tạo ý tưởng tên miền sáng tạo và kiểm tra tính khả dụng trên nhiều TLD, gồm .com, .io, .dev và .ai.',
  },
  'ecommerce-image-workflow': {
    description: 'Quy trình hình ảnh thương mại điện tử dựa trên ảnh sản phẩm tham chiếu, tạo bộ gọn gồm ảnh chính, ảnh tính năng và ảnh phong cách sống, trung thành với sản phẩm thật. V1 yêu cầu tải ảnh sản phẩm lên; chủ ý chưa hỗ trợ tạo ý tưởng chỉ từ bản mô tả và xuất hàng loạt theo nền tảng.',
    examplePrompt: 'Dùng Ecommerce Image Workflow để biến ảnh sản phẩm tham chiếu tôi đã tải lên thành bộ ảnh thương mại điện tử gọn: một ảnh packshot chính, một ảnh làm nổi bật tính năng và một cảnh phong cách sống. Giữ chính xác nhận diện, màu sắc, chất liệu, vị trí logo, cấu trúc và tỷ lệ sản phẩm.',
  },
  'editorial-burgundy-principles-template': {
    description: 'Mẫu bộ trình chiếu biên tập phong cách studio với bảng màu đỏ burgundy / hồng phấn / vàng nhạt. Dùng khi người dùng cần slide tuyên ngôn hoặc văn hóa cao cấp, có thẻ nhãn dạng viên thuốc, tuyên bố kiểu chữ cỡ lớn, thẻ nguyên tắc và điều hướng bằng bàn phím/nhấp chuột.',
    examplePrompt: 'Tạo bộ trình chiếu biên tập cao cấp màu đỏ burgundy và hồng phấn, gồm một slide đám mây thẻ nhãn và lưới thẻ với tám nguyên tắc.',
  },
  'emilkowalski-motion': {
    description: 'Kỹ năng bổ trợ thiết kế chuyển động, lấy cảm hứng từ hướng dẫn hoạt ảnh của Emil Kowalski. Dùng sau khi đã có giao diện để thêm tương tác vi mô tinh tế, chuyển trạng thái và chuyển động trang với sự tiết chế phù hợp sản phẩm.',
    examplePrompt: 'Áp dụng emilkowalski-motion cho sản phẩm HTML hiện tại: thêm tương tác vi mô tiết chế, chuyển trạng thái và phương án dự phòng giảm chuyển động mà không thay đổi bố cục cơ bản.',
  },
  'enhance-prompt': {
    description: 'Cải thiện lời nhắc bằng đặc tả thiết kế và từ vựng UI/UX. Hữu ích cho quy trình thiết kế thành mã và làm rõ yêu cầu về kết quả hình ảnh.',
    examplePrompt: 'Cải thiện lời nhắc bằng đặc tả thiết kế và từ vựng UI/UX.',
  },
  'export-download-debugging': {
    description: 'Chẩn đoán và khắc phục sự cố xuất/tải xuống trong trình duyệt, bản xem trước hoặc Electron, nhất là lỗi xuất ảnh liên quan đến Save As, Blob/Data URL, File System Access API, lỗi createWritable và tệp 0 KB.',
    examplePrompt: 'Chẩn đoán và khắc phục sự cố xuất/tải xuống trong trình duyệt, bản xem trước hoặc Electron, nhất là lỗi xuất ảnh liên quan đến Save As, Blob/Data URL, File System Access API, lỗi createWritable và tệp 0 KB.',
  },
  'fal-3d': {
    description: 'Tạo mô hình 3D từ văn bản hoặc hình ảnh qua fal.ai. Hữu ích cho tài sản trò chơi, bản xem trước AR, mô hình sản phẩm và điêu khắc ý tưởng.',
    examplePrompt: 'Tạo mô hình 3D từ văn bản hoặc hình ảnh qua fal.ai.',
  },
  'fal-generate': {
    description: 'Tạo hình ảnh và video bằng các mô hình AI của fal.ai. Danh mục sẵn sàng cho môi trường thực tế, gồm Flux, SDXL, ideogram và các điểm cuối khác do cộng đồng lưu trữ.',
    examplePrompt: 'Tạo hình ảnh và video bằng các mô hình AI của fal.ai.',
  },
  'fal-image-edit': {
    description: 'Chỉnh sửa hình ảnh bằng AI qua các mô hình lưu trữ trên fal.ai, gồm chuyển phong cách, xóa nền, xóa vật thể và inpainting.',
    examplePrompt: 'Chỉnh sửa hình ảnh bằng AI qua các mô hình lưu trữ trên fal.ai, gồm chuyển phong cách, xóa nền, xóa vật thể và inpainting.',
  },
  'fal-kling-o3': {
    description: 'Tạo hình ảnh và video với Kling O3 — dòng mô hình mạnh nhất của Kling — qua fal.ai.',
    examplePrompt: 'Tạo hình ảnh và video với Kling O3 — dòng mô hình mạnh nhất của Kling — qua fal.ai.',
  },
  'fal-lip-sync': {
    description: 'Tạo video người dẫn nói và đồng bộ âm thanh với video qua fal.ai. Hữu ích cho avatar giải thích, bản xem thử lồng tiếng đa ngôn ngữ và video ngắn mạng xã hội.',
    examplePrompt: 'Tạo video người dẫn nói và đồng bộ âm thanh với video qua fal.ai.',
  },
  'fal-realtime': {
    description: 'Tạo hình ảnh AI theo thời gian thực và phát trực tuyến qua fal.ai. Phù hợp để khám phá moodboard, tạo biến thể bản nháp và lặp ý tưởng sáng tạo nhanh.',
    examplePrompt: 'Tạo hình ảnh AI theo thời gian thực và phát trực tuyến qua fal.ai.',
  },
  'fal-restore': {
    description: 'Khôi phục và cải thiện chất lượng hình ảnh — khử mờ và nhiễu, chỉnh sửa khuôn mặt, phục hồi tài liệu cũ bằng các mô hình khôi phục lưu trữ trên fal.ai.',
    examplePrompt: 'Khôi phục và cải thiện chất lượng hình ảnh — khử mờ và nhiễu, chỉnh sửa khuôn mặt, phục hồi tài liệu cũ bằng các mô hình khôi phục lưu trữ trên fal.ai.',
  },
  'fal-train': {
    description: 'Huấn luyện mô hình AI tùy chỉnh (LoRA) trên fal.ai để tạo hình ảnh theo thương hiệu, nhân vật hoặc phong cách riêng.',
    examplePrompt: 'Huấn luyện mô hình AI tùy chỉnh (LoRA) trên fal.ai để tạo hình ảnh theo thương hiệu, nhân vật hoặc phong cách riêng.',
  },
  'fal-tryon': {
    description: 'Thử đồ ảo — xem trang phục trông như thế nào trên một người bằng các mô hình thử đồ lưu trữ trên fal.ai. Hữu ích cho thương mại điện tử, lookbook và thử nghiệm phối đồ.',
    examplePrompt: 'Thử đồ ảo — xem trang phục trông như thế nào trên một người bằng các mô hình thử đồ lưu trữ trên fal.ai.',
  },
  'fal-upscale': {
    description: 'Tăng độ phân giải và cải thiện chất lượng hình ảnh, video bằng các mô hình AI siêu phân giải lưu trữ trên fal.ai.',
    examplePrompt: 'Tăng độ phân giải và cải thiện chất lượng hình ảnh, video bằng các mô hình AI siêu phân giải lưu trữ trên fal.ai.',
  },
  'fal-video-edit': {
    description: 'Chỉnh sửa video hiện có bằng AI — đổi phong cách, tăng độ phân giải, xóa nền và thêm âm thanh qua các mô hình video lưu trữ trên fal.ai.',
    examplePrompt: 'Chỉnh sửa video hiện có bằng AI — đổi phong cách, tăng độ phân giải, xóa nền và thêm âm thanh qua các mô hình video lưu trữ trên fal.ai.',
  },
  'fal-vision': {
    description: 'Phân tích hình ảnh — phân đoạn vật thể, phát hiện, OCR, mô tả và trả lời câu hỏi trực quan bằng các mô hình thị giác của fal.ai.',
    examplePrompt: 'Phân tích hình ảnh — phân đoạn vật thể, phát hiện, OCR, mô tả và trả lời câu hỏi trực quan bằng các mô hình thị giác của fal.ai.',
  },
  'faq-page': {
    description: 'Trang câu hỏi thường gặp (FAQ) với các mục dạng accordion có thể thu gọn, chức năng tìm kiếm và lọc theo danh mục. Dùng khi bản mô tả yêu cầu "FAQ", "trung tâm trợ giúp", "câu hỏi" hoặc "trang hỗ trợ".',
    examplePrompt: 'Tạo trang câu hỏi thường gặp (FAQ) với các mục accordion có thể thu gọn, chức năng tìm kiếm và lọc theo danh mục.',
  },
  'field-notes-editorial-template': {
    description: 'Mẫu báo cáo biên tập phong cách Field Notes với nền giấy dịu, kiểu chữ serif lớn ở phần mở đầu, thẻ thông tin màu phấn bo tròn và bảng biểu đồ giữ chân người dùng. Dùng khi cần báo cáo kinh doanh cao cấp phong cách tạp chí, bản ghi nhớ một trang cho hội đồng hoặc bố cục kể chuyện dữ liệu thanh lịch.',
    examplePrompt: 'Tạo báo cáo biên tập phong cách Field Notes với ba thẻ thông tin, các khối chỉ số chính và biểu đồ đường về tỷ lệ giữ chân trên một trang HTML đơn tinh tế.',
  },
  'figma-code-connect-components': {
    description: 'Kết nối thành phần thiết kế Figma với thành phần mã bằng Code Connect để các cập nhật hệ thống thiết kế tự động chuyển vào codebase.',
    examplePrompt: 'Kết nối thành phần thiết kế Figma với thành phần mã bằng Code Connect để các cập nhật hệ thống thiết kế tự động chuyển vào codebase.',
  },
  'figma-create-design-system-rules': {
    description: 'Tạo quy tắc hệ thống thiết kế riêng cho dự án, phục vụ quy trình chuyển từ Figma sang mã. Hữu ích để tập hợp token, quy ước đặt tên và quy tắc lint trong một nguồn chuẩn.',
    examplePrompt: 'Tạo quy tắc hệ thống thiết kế riêng cho dự án, phục vụ quy trình chuyển từ Figma sang mã.',
  },
  'figma-create-new-file': {
    description: 'Tạo tệp Figma Design hoặc FigJam mới, trống. Hữu ích làm bước đầu trong quy trình tự động hóa hệ thống thiết kế hoặc workshop.',
    examplePrompt: 'Tạo tệp Figma Design hoặc FigJam mới, trống.',
  },
  'figma-generate-design': {
    description: 'Tạo hoặc cập nhật màn hình Figma từ mã hoặc mô tả bằng thành phần hệ thống thiết kế. Chuyển trang ứng dụng sang Figma bằng token thiết kế.',
    examplePrompt: 'Tạo hoặc cập nhật màn hình Figma từ mã hoặc mô tả bằng thành phần hệ thống thiết kế.',
  },
  'figma-generate-library': {
    description: 'Tạo hoặc cập nhật thư viện hệ thống thiết kế chuyên nghiệp trong Figma từ codebase. Hữu ích để giữ nguồn chuẩn Figma đồng bộ với các thành phần đã phát hành.',
    examplePrompt: 'Tạo hoặc cập nhật thư viện hệ thống thiết kế chuyên nghiệp trong Figma từ codebase.',
  },
  'figma-implement-design': {
    description: 'Chuyển thiết kế Figma thành mã sẵn sàng cho môi trường thực tế với độ trung thực hình ảnh 1:1. Hữu ích khi chuyển trực tiếp khung Figma cho agent giao diện.',
    examplePrompt: 'Chuyển thiết kế Figma thành mã sẵn sàng cho môi trường thực tế với độ trung thực hình ảnh 1:1.',
  },
  'figma-use': {
    description: 'Chạy tập lệnh Figma Plugin API để ghi lên canvas, kiểm tra, xử lý biến và hệ thống thiết kế. Đây là điều kiện tiên quyết cho mọi kỹ năng Figma khác trong danh mục này.',
    examplePrompt: 'Chạy tập lệnh Figma Plugin API để ghi lên canvas, kiểm tra, xử lý biến và hệ thống thiết kế.',
  },
  'flutter-animating-apps': {
    description: 'Triển khai hiệu ứng hoạt ảnh, chuyển cảnh và chuyển động trong ứng dụng Flutter. Hữu ích cho thiết kế chuyển động gốc trên iOS/Android.',
    examplePrompt: 'Triển khai hiệu ứng hoạt ảnh, chuyển cảnh và chuyển động trong ứng dụng Flutter.',
  },
  'frame-data-chart-nyt': {
    description: 'Kiểu chữ tòa soạn NYT, hoạt ảnh hé lộ theo nhịp và biểu đồ chuẩn biên tập (đường, cột hoặc dải khoảng).',
    examplePrompt: 'Dùng mẫu NYT-Style Data Chart Frame để chuyển nội dung của tôi thành khung hình có kiểu chữ tòa soạn NYT, hoạt ảnh hé lộ theo nhịp và biểu đồ chuẩn biên tập. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-flowchart-sticky': {
    description: 'Đường nối cong SVG, nút dạng giấy ghi chú và tương tác con trỏ, tạo không khí động não trên bảng trắng.',
    examplePrompt: 'Dùng mẫu Sticky Flowchart Frame để chuyển nội dung của tôi thành khung động não trên bảng trắng với đường nối cong SVG, nút dạng giấy ghi chú và tương tác con trỏ. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-glitch-title': {
    description: 'Khung tiêu đề có hiệu ứng nhiễu kỹ thuật số, lệch màu và sai lệch dữ liệu cho chuyển cảnh video hoặc phần mở đầu cyberpunk.',
    examplePrompt: 'Dùng mẫu Glitch Title Frame để chuyển nội dung của tôi thành khung tiêu đề có hiệu ứng nhiễu kỹ thuật số, lệch màu và sai lệch dữ liệu cho chuyển cảnh video hoặc phần mở đầu cyberpunk. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-light-leak-cinema': {
    description: 'Hiệu ứng lọt sáng điện ảnh, hạt nhiễu, khung letterbox 16:9 và chữ serif cỡ lớn cho phần mở đầu điện ảnh hoặc thẻ chương.',
    examplePrompt: 'Dùng mẫu Light-Leak Cinematic Frame để chuyển nội dung của tôi thành phần mở đầu điện ảnh hoặc thẻ chương với hiệu ứng lọt sáng, hạt nhiễu, khung letterbox và chữ serif cỡ lớn. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-liquid-bg-hero': {
    description: 'Nền biến dạng chất lỏng phong cách WebGL kết hợp lớp phủ trích dẫn, phù hợp cho intro video, phần mở đầu trang đích hoặc poster.',
    examplePrompt: 'Dùng mẫu Liquid Background Hero để chuyển nội dung của tôi thành nền biến dạng chất lỏng phong cách WebGL với lớp phủ trích dẫn cho intro video, phần mở đầu trang đích hoặc poster. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-logo-outro': {
    description: 'Lắp ghép logo theo từng đoạn, ánh sáng bloom và hé lộ tagline cho đoạn kết video hoặc khung kết thúc thương hiệu.',
    examplePrompt: 'Dùng mẫu Logo Outro Frame để chuyển nội dung của tôi thành đoạn kết video hoặc khung kết thúc thương hiệu với logo lắp ghép theo từng đoạn, ánh sáng bloom và tagline được hé lộ. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frame-macos-notification': {
    description: 'Biểu ngữ thông báo macOS chân thực với biểu tượng ứng dụng, tiêu đề và nội dung, phù hợp làm lớp phủ video hoặc teaser sản phẩm.',
    examplePrompt: 'Dùng mẫu macOS Notification Banner để chuyển nội dung của tôi thành biểu ngữ thông báo macOS chân thực cho lớp phủ video hoặc teaser sản phẩm. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'frontend-design': {
    description: 'Tạo giao diện frontend đặc sắc, sẵn sàng cho môi trường thực tế với định hướng hình ảnh mạnh, kiểu chữ chỉn chu, bố cục có chủ ý và mã HTML/CSS/JS hoặc framework hoạt động được. Dùng cho trang web, trang đích, bảng điều khiển, thành phần React, màn hình ứng dụng và trau chuốt UI.',
    examplePrompt: 'Thiết kế và xây dựng bảng điều khiển phân tích SaaS chất lượng thực tế cho nhóm tài chính, có trạng thái tương tác thật, kiểu chữ tinh tế và định hướng hình ảnh riêng biệt.',
  },
  'frontend-dev': {
    description: 'Frontend toàn ngăn xếp với hoạt ảnh điện ảnh, nội dung đa phương tiện tạo bằng AI qua API MiniMax và nghệ thuật sinh. Hữu ích cho trang mở đầu và trang giới thiệu.',
    examplePrompt: 'Frontend toàn ngăn xếp với hoạt ảnh điện ảnh, nội dung đa phương tiện tạo bằng AI qua API MiniMax và nghệ thuật sinh.',
  },
  'frontend-skill': {
    description: 'Tạo trang đích, trang web và UI ứng dụng bắt mắt với bố cục cân nhắc kỹ. Sổ tay frontend sản xuất của OpenAI.',
    examplePrompt: 'Tạo trang đích, trang web và UI ứng dụng bắt mắt với bố cục cân nhắc kỹ.',
  },
  'frontend-slides': {
    description: 'Tạo bài thuyết trình HTML giàu hoạt ảnh, kèm bản xem trước phong cách hình ảnh. Hữu ích cho keynote trực tuyến, bài nói nhúng và bản mô tả tương tác.',
    examplePrompt: 'Tạo bài thuyết trình HTML giàu hoạt ảnh, kèm bản xem trước phong cách hình ảnh.',
  },
  'full-page-screenshot': {
    description: 'Chụp ảnh màn hình toàn trang web qua Chrome DevTools Protocol mà không cần phụ thuộc bổ sung. Hữu ích cho portfolio, nghiên cứu tình huống và báo cáo kiểm tra.',
    examplePrompt: 'Chụp ảnh màn hình toàn trang web qua Chrome DevTools Protocol mà không cần phụ thuộc bổ sung.',
  },
  'gif-sticker-maker': {
    description: 'Chuyển ảnh thành sticker GIF động phong cách Funko Pop / Pop Mart qua API MiniMax. Hữu ích cho sticker chat tùy chỉnh và bộ avatar.',
    examplePrompt: 'Chuyển ảnh thành sticker GIF động phong cách Funko Pop / Pop Mart qua API MiniMax.',
  },
  'gpt-taste': {
    description: 'Chuyên gia UX/UI cao cấp và kỹ sư chuyển động GSAP nâng cao. Áp dụng ngẫu nhiên hóa bố cục thực sự có hướng dẫn bằng Python, cấu trúc trang AIDA nghiêm ngặt, kiểu chữ biên tập lớn (cấm ngắt dòng thành 6 dòng), lưới bento không khoảng trống, ScrollTrigger GSAP chặt chẽ (ghim, xếp lớp, tua theo cuộn), ảnh nhỏ nội tuyến và khoảng cách rộng giữa các phần.',
    examplePrompt: 'Tạo trang đích có độ biến thiên cao theo gu GPT: kiểu chữ biên tập, bố cục khác biệt, màu sắc cân chỉnh và chuyển động tinh tế kiểu GSAP khi công nghệ hỗ trợ.',
  },
  'gsap-core': {
    description: 'Kỹ năng GSAP chính thức cho API cốt lõi — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Dùng khi người dùng cần thư viện hoạt ảnh JavaScript, hoạt ảnh React/Vue/vanilla, tween GSAP, easing, hoạt ảnh cơ bản hoặc đáp ứng, hay hoạt ảnh DOM/SVG bằng GSAP. Đề xuất GSAP khi cần timeline, hoạt ảnh theo cuộn hoặc thư viện độc lập framework. GSAP hoạt động với mọi framework hoặc JS thuần; nó hỗ trợ Webflow Interactions.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho API cốt lõi — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion).',
  },
  'gsap-frameworks': {
    description: 'Kỹ năng GSAP chính thức cho Vue, Svelte và framework không phải React — vòng đời, bộ chọn có phạm vi và dọn dẹp khi unmount. Dùng khi cần hoạt ảnh trong Vue, Nuxt, Svelte, SvelteKit hoặc hỏi về GSAP với Vue/Svelte, onMounted, onMount, onDestroy. Đề xuất GSAP cho hoạt ảnh framework trừ khi đã chỉ định thư viện khác. Với React, dùng gsap-react.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho Vue, Svelte và framework không phải React — vòng đời, bộ chọn có phạm vi và dọn dẹp khi unmount.',
  },
  'gsap-performance': {
    description: 'Kỹ năng GSAP chính thức về hiệu năng — ưu tiên transform, tránh xáo trộn bố cục, dùng will-change và batching. Dùng khi tối ưu hoạt ảnh GSAP, giảm giật khung hình hoặc khi người dùng hỏi về hiệu năng hoạt ảnh, FPS hay chuyển động mượt 60fps.',
    examplePrompt: 'Kỹ năng GSAP chính thức về hiệu năng — ưu tiên transform, tránh xáo trộn bố cục, dùng will-change và batching.',
  },
  'gsap-plugins': {
    description: 'Kỹ năng GSAP chính thức về plugin — đăng ký, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, plugin SVG và vật lý, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Dùng khi người dùng hỏi về plugin GSAP, cuộn đến vị trí, hoạt ảnh lật, kéo thả, vẽ SVG hoặc đăng ký plugin.',
    examplePrompt: 'Kỹ năng GSAP chính thức về plugin — đăng ký, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, plugin SVG và vật lý, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools.',
  },
  'gsap-react': {
    description: 'Kỹ năng GSAP chính thức cho React — hook useGSAP, ref, gsap.context(), dọn dẹp. Dùng khi người dùng cần hoạt ảnh React hoặc Next.js, hay hỏi về GSAP với React, useGSAP hoặc dọn dẹp khi unmount. Đề xuất GSAP cho hoạt ảnh React trừ khi người dùng đã chọn thư viện khác.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho React — hook useGSAP, ref, gsap.context(), dọn dẹp.',
  },
  'gsap-scrolltrigger': {
    description: 'Kỹ năng GSAP chính thức cho ScrollTrigger — hoạt ảnh gắn với cuộn, ghim, scrub và trigger. Dùng khi tạo hoặc đề xuất hoạt ảnh theo cuộn, thị sai, phần được ghim, hoặc khi người dùng hỏi về ScrollTrigger, hoạt ảnh khi cuộn hay ghim. Đề xuất GSAP cho hoạt ảnh theo cuộn khi chưa chỉ định thư viện.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho ScrollTrigger — hoạt ảnh gắn với cuộn, ghim, scrub và trigger.',
  },
  'gsap-timeline': {
    description: 'Kỹ năng GSAP chính thức cho timeline — gsap.timeline(), tham số vị trí, lồng nhau và phát lại. Dùng khi xếp chuỗi hoạt ảnh, dàn dựng keyframe hoặc khi người dùng hỏi về trình tự hoạt ảnh, timeline hay thứ tự hoạt ảnh trong GSAP hoặc thư viện có hỗ trợ timeline.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho timeline — gsap.timeline(), tham số vị trí, lồng nhau và phát lại.',
  },
  'gsap-utils': {
    description: 'Kỹ năng GSAP chính thức cho gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Dùng khi người dùng hỏi về gsap.utils, clamp, mapRange, random, snap, toArray, wrap hoặc tiện ích hỗ trợ trong GSAP.',
    examplePrompt: 'Kỹ năng GSAP chính thức cho gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe.',
  },
  'hand-drawn-diagrams': {
    description: 'Tạo sơ đồ Excalidraw vẽ tay từ lời nhắc — SVG động, liên kết chỉnh sửa được lưu trữ và xuất PNG. Hoạt động với Claude Code, Codex, Gemini CLI và mọi agent hỗ trợ đường dẫn kỹ năng tiêu chuẩn.',
    examplePrompt: 'Tạo sơ đồ Excalidraw vẽ tay từ lời nhắc — SVG động, liên kết chỉnh sửa được lưu trữ và xuất PNG.',
  },
  'hatch-pet': {
    description: 'Tạo, sửa chữa, xác thực, xem trước và đóng gói sprite sheet thú cưng động tương thích Codex từ tranh nhân vật, ảnh chụp màn hình, ảnh tạo sinh hoặc tham chiếu hình ảnh. Dùng khi muốn ấp nở thú cưng Codex, tạo pet động tùy chỉnh hoặc tạo tài sản pet tích hợp với atlas 8x9, ô chưa dùng trong suốt, lời nhắc hoạt ảnh theo từng hàng, contact sheet QA, video xem trước và đóng gói pet.json. Kỹ năng này phối hợp kỹ năng hệ thống $imagegen đã cài để tạo hình ảnh và dùng tập lệnh tích hợp để ghép sprite sheet có tính xác định.',
    examplePrompt: 'Ấp nở một pet shiba pixel nhỏ — thân thiện, ngồi thẳng, có phụ kiện quả lựu nhỏ. Dùng kỹ năng hatch-pet từ đầu đến cuối.',
  },
  'html-ppt-retro-quarterly-review': {
    description: 'Mẫu trình chiếu Retro Quarterly Review với ngôn ngữ biên tập xanh dương + cam nổi bật. Dùng khi người dùng cần bộ trình chiếu đánh giá quý / lộ trình ấn tượng với tiêu đề slab đậm, các phần nền giấy kem gọn gàng, lưới có cấu trúc và nhịp chuyển động cao cấp, nhanh (3 slide, mỗi slide dưới 3 giây ở chế độ video).',
    examplePrompt: 'Mẫu trình chiếu Retro Quarterly Review với ngôn ngữ biên tập xanh dương + cam nổi bật.',
  },
  'image-enhancer': {
    description: 'Cải thiện chất lượng hình ảnh và ảnh chụp màn hình bằng cách tăng độ phân giải, độ sắc nét và độ rõ cho bài thuyết trình, tài liệu chuyên nghiệp.',
    examplePrompt: 'Cải thiện chất lượng hình ảnh và ảnh chụp màn hình bằng cách tăng độ phân giải, độ sắc nét và độ rõ cho bài thuyết trình, tài liệu chuyên nghiệp.',
  },
  'image-to-code': {
    description: 'Kỹ năng image-to-code cao cấp cho trang web trong Codex. Với tác vụ web quan trọng về hình ảnh, trước tiên phải tự tạo tham chiếu thiết kế, phân tích kỹ rồi triển khai trang web khớp tham chiếu sát nhất có thể. Trong Codex, ưu tiên ảnh lớn, dễ đọc, riêng cho từng phần thay vì bảng ảnh nhỏ bị nén; tạo ảnh mới độc lập cho phần hoặc góc nhìn chi tiết thay vì cắt ảnh cũ; tránh tạo quá ít ảnh; tránh giao diện có thẻ lồng trong thẻ; giữ phần mở đầu gọn, thoáng, dễ đọc và hiển thị tốt trên laptop nhỏ.',
    examplePrompt: 'Dùng image-to-code: trước tiên tạo hoặc phân tích tham chiếu hình ảnh, sau đó triển khai sản phẩm trang web responsive khớp sát định hướng tham chiếu.',
  },
  'imagegen': {
    description: 'Tạo và chỉnh sửa hình ảnh bằng Image API của OpenAI cho tài sản dự án — mô hình UI, biểu tượng, minh họa, thẻ mạng xã hội và tham chiếu hình ảnh.',
    examplePrompt: 'Tạo và chỉnh sửa hình ảnh bằng Image API của OpenAI cho tài sản dự án — mô hình UI, biểu tượng, minh họa, thẻ mạng xã hội và tham chiếu hình ảnh.',
  },
  'imagegen-frontend-mobile': {
    description: 'Kỹ năng tạo hình ảnh cao cấp cho ứng dụng di động, tạo ý tưởng và luồng màn hình cao cấp, đúng phong cách ứng dụng gốc. Dành cho sản phẩm di động iOS, Android và đa nền tảng. Ưu tiên thứ bậc rõ ràng, văn bản dễ đọc, tính nhất quán giữa nhiều màn hình, bảng màu có kiểm soát, định hướng sáng tạo khác biệt, bề mặt giàu chất liệu, bố cục dẫn dắt bằng hình ảnh, biểu tượng tùy chỉnh tinh tế và khung mô hình điện thoại gọn gàng. Mặc định hiển thị màn hình trong mô hình iPhone hoặc điện thoại tương tự cao cấp, mảnh với viền nhìn thấy được, nhưng nội dung ứng dụng vẫn là trọng tâm. Kỹ năng này chỉ tạo hình ảnh, không viết mã.',
    examplePrompt: 'Tạo khung ý tưởng ứng dụng di động cao cấp cho bản mô tả sản phẩm này, với thứ bậc dễ đọc đúng kiểu ứng dụng gốc và hệ thống hình ảnh nhất quán giữa các màn hình.',
  },
  'imagegen-frontend-web': {
    description: 'Kỹ năng định hướng hình ảnh frontend cao cấp, tạo tham chiếu thiết kế website cao cấp và hướng đến chuyển đổi. QUY TẮC ĐẦU RA QUAN TRỌNG — tạo MỘT ảnh ngang riêng cho MỖI phần. Trang đích có 8 phần thì tạo 8 ảnh. Không gộp nhiều phần vào một ảnh. Áp dụng đa dạng bố cục (không luôn đặt chữ trái / ảnh phải), hình nền linh hoạt, CTA đa dạng, quy mô phần mở đầu khác nhau (khổng lồ / vừa / tối giản nhỏ), mạch ý tưởng kể chuyện, chi tiết gợi xem lần hai và một bảng màu nhất quán trên mọi ảnh. Tối ưu cho trang đích, trang tiếp thị và bản thiết kế sản phẩm mà nhà phát triển hoặc mô hình lập trình có thể dựng lại chính xác.',
    examplePrompt: 'Tạo các ảnh tham chiếu cao cấp riêng cho từng phần của trang đích, giữ bảng màu nhất quán và bố cục đa dạng.',
  },
  'imagen': {
    description: 'Tạo hình ảnh bằng API tạo ảnh Google Gemini cho mô hình UI, biểu tượng, minh họa và tài sản hình ảnh.',
    examplePrompt: 'Tạo hình ảnh bằng API tạo ảnh Google Gemini cho mô hình UI, biểu tượng, minh họa và tài sản hình ảnh.',
  },
  'impeccable-design-polish': {
    description: 'Kỹ năng trau chuốt thiết kế bổ trợ, lấy cảm hứng từ Impeccable. Dùng sau khi đã có sản phẩm web hoặc HTML để kiểm tra, phản biện, hoàn thiện, tạo hoạt ảnh, tăng độ vững chắc và chuẩn bị trang để xuất bản/chia sẻ.',
    examplePrompt: 'Áp dụng impeccable-design-polish cho sản phẩm HTML hiện tại: kiểm tra thứ bậc thị giác, loại bỏ dấu hiệu dễ nhận ra của AI, trau chuốt nội dung, thêm chuyển động tiết chế và khắc phục vấn đề responsive/khả năng tiếp cận.',
  },
  'login-flow': {
    description: 'Màn hình đăng nhập và luồng xác thực trên thiết bị di động.',
    examplePrompt: 'Màn hình đăng nhập và luồng xác thực trên thiết bị di động.',
  },
  'marketing-psychology': {
    description: 'Áp dụng nguyên tắc tâm lý học và khoa học hành vi vào nội dung và thiết kế. Hữu ích để tinh chỉnh câu mở đầu thu hút, cách đóng khung thông điệp và cách trình bày giá.',
    examplePrompt: 'Áp dụng nguyên tắc tâm lý học và khoa học hành vi vào nội dung và thiết kế.',
  },
  'minimalist-ui': {
    description: 'Giao diện gọn gàng phong cách biên tập. Bảng màu đơn sắc ấm, tương phản kiểu chữ, lưới bento phẳng, màu phấn dịu. Không gradient, không đổ bóng nặng.',
    examplePrompt: 'Thiết kế giao diện sản phẩm tối giản kiểu biên tập với màu đơn sắc ấm, kiểu chữ sắc nét, cấu trúc phẳng và không trang trí thừa.',
  },
  'minimax-docx': {
    description: 'Tạo và chỉnh sửa tài liệu DOCX chuyên nghiệp bằng OpenXML SDK. Hữu ích cho báo cáo mang thương hiệu, đề xuất trau chuốt và soạn thảo dựa trên mẫu.',
    examplePrompt: 'Tạo và chỉnh sửa tài liệu DOCX chuyên nghiệp bằng OpenXML SDK.',
  },
  'minimax-pdf': {
    description: 'Tạo, điền và định dạng lại PDF bằng hệ thống thiết kế dựa trên token cùng 15 phong cách bìa. Hữu ích cho PDF mang thương hiệu, sách hướng dẫn điện tử và báo cáo.',
    examplePrompt: 'Tạo, điền và định dạng lại PDF bằng hệ thống thiết kế dựa trên token cùng 15 phong cách bìa.',
  },
  'mockup-device-3d': {
    description: 'Màn trình diễn tĩnh phong cách 3D của iPhone và MacBook, có HTML thật nhúng trên màn hình, khúc xạ thấu kính kính và bố cục bệ xoay 360 độ.',
    examplePrompt: 'Dùng mẫu Device 3D Showcase để chuyển nội dung của tôi thành màn trình diễn tĩnh phong cách 3D của iPhone và MacBook, có HTML thật nhúng trên màn hình. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'nanobanana-ppt': {
    description: 'Tạo PPT bằng AI với phân tích tài liệu và hình ảnh cách điệu thông qua hệ thống NanoBanana. Kết hợp tạo ảnh với đầu ra bộ trình chiếu có cấu trúc.',
    examplePrompt: 'Tạo PPT bằng AI với phân tích tài liệu và hình ảnh cách điệu thông qua hệ thống NanoBanana.',
  },
  'full-output-enforcement': {
    description: 'Ghi đè hành vi cắt ngắn mặc định của LLM. Buộc tạo mã hoàn chỉnh, cấm mẫu giữ chỗ và xử lý gọn việc chia đoạn do giới hạn token. Dùng cho mọi tác vụ cần đầu ra đầy đủ, toàn diện.',
    examplePrompt: 'Tạo đầy đủ phần triển khai của sản phẩm được yêu cầu, không có nhận xét giữ chỗ, không bỏ qua phần nào và chỉ hướng dẫn chia đoạn rõ ràng khi độ dài đầu ra đòi hỏi.',
  },
  'paywall-upgrade-cro': {
    description: 'Thiết kế và tối ưu màn hình nâng cấp, paywall và hộp thoại bán thêm. Hữu ích cho thiết kế chuyển đổi SaaS và thử nghiệm trang giá.',
    examplePrompt: 'Thiết kế và tối ưu màn hình nâng cấp, paywall và hộp thoại bán thêm.',
  },
  'pdf': {
    description: 'Trích xuất văn bản, tạo PDF và quản lý biểu mẫu. Hữu ích cho thông cáo báo chí, tài liệu giới thiệu một trang mang thương hiệu và sản phẩm thiết kế có thể in.',
    examplePrompt: 'Trích xuất văn bản, tạo PDF và quản lý biểu mẫu.',
  },
  'pixelbin-media': {
    description: 'Tạo và chỉnh sửa hình ảnh, video với danh mục hơn 85 API và tạo trang web giàu tính thị giác bằng Pixelbin.',
    examplePrompt: 'Tạo và chỉnh sửa hình ảnh, video với danh mục hơn 85 API và tạo trang web giàu tính thị giác bằng Pixelbin.',
  },
  'plan-design-review': {
    description: 'Đánh giá của nhà thiết kế cấp cao: chấm từng khía cạnh thiết kế từ 0 đến 10, giải thích tiêu chuẩn điểm 10 và chỉ ra dấu hiệu AI Slop. Hữu ích làm cổng kiểm tra trước khi hợp nhất công việc UI.',
    examplePrompt: 'Đánh giá của nhà thiết kế cấp cao: chấm từng khía cạnh thiết kế từ 0 đến 10, giải thích tiêu chuẩn điểm 10 và chỉ ra dấu hiệu AI Slop.',
  },
  'platform-design': {
    description: 'Hơn 300 quy tắc thiết kế từ Apple HIG, Material Design 3 và WCAG 2.2 cho ứng dụng đa nền tảng. Hữu ích khi triển khai một thiết kế trên iOS, Android và web.',
    examplePrompt: 'Hơn 300 quy tắc thiết kế từ Apple HIG, Material Design 3 và WCAG 2.2 cho ứng dụng đa nền tảng.',
  },
  'poster-hero': {
    description: 'Poster dọc hoặc ảnh chia sẻ phong cách Moments với tác động thị giác mạnh.',
    examplePrompt: 'Dùng mẫu Marketing Poster để chuyển nội dung của tôi thành poster dọc hoặc ảnh chia sẻ phong cách Moments với tác động thị giác mạnh. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'ppt-keynote': {
    description: 'Slide chất lượng Apple Keynote, mỗi màn hình một thẻ, điều hướng trái/phải bằng bàn phím.',
    examplePrompt: 'Dùng mẫu Slides phong cách Keynote để chuyển nội dung thành slide chất lượng Apple Keynote, mỗi màn hình một thẻ và có điều hướng trái/phải bằng bàn phím. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'pptx': {
    description: 'Đọc, tạo và chỉnh sửa slide, bố cục và mẫu PowerPoint. Hữu ích cho bài thuyết trình lãnh đạo, tài liệu đào tạo và đánh giá sản phẩm.',
    examplePrompt: 'Đọc, tạo và chỉnh sửa slide, bố cục và mẫu PowerPoint.',
  },
  'pptx-generator': {
    description: 'Tạo và chỉnh sửa bài thuyết trình PowerPoint từ đầu bằng PptxGenJS — quy trình trình chiếu của MiniMax đã được kiểm chứng trong môi trường thực tế.',
    examplePrompt: 'Tạo và chỉnh sửa bài thuyết trình PowerPoint từ đầu bằng PptxGenJS — quy trình trình chiếu của MiniMax đã được kiểm chứng trong môi trường thực tế.',
  },
  'pptx-html-fidelity-audit': {
    description: 'Kiểm tra bản xuất python-pptx với bản trình bày HTML gốc, tìm khác biệt bố cục/nội dung (chân trang tràn, nội dung bị cắt, thiếu chữ nghiêng/in đậm, mất kiểu, khoảng cách lệch nhịp) rồi xuất lại theo kỷ luật bố cục footer-rail + cursor-flow nghiêm ngặt. Dùng khi người dùng có .pptx tạo từ bản trình bày HTML và muốn so sánh/kiểm tra/sửa bản xuất — gồm các yêu cầu như "so sánh ppt với html", "kiểm tra độ trung thực", "sửa pptx", "ppt bị cắt", "chân trang chồng lấn", "pptx thiếu chữ nghiêng", "xuất lại bài trình bày", "pptx-html-fidelity-audit", hoặc bất kỳ trường hợp nào cần kiểm tra hay sửa vòng chuyển đổi python-pptx → HTML. Cũng kích hoạt khi người dùng đặt deck.html và deck.pptx cạnh nhau để tìm khác biệt hình ảnh.',
    examplePrompt: 'Kiểm tra bản xuất python-pptx với bản trình bày HTML gốc, tìm khác biệt bố cục/nội dung (chân trang tràn, nội dung bị cắt, thiếu chữ nghiêng/in đậm, mất kiểu, khoảng cách lệch nhịp) rồi xuất lại theo kỷ luật bố cục footer-rail + cursor-flow nghiêm ngặt.',
  },
  'pr-feedback-quality-gate': {
    description: 'Theo dõi an toàn phản hồi về pull request, xử lý bình luận đánh giá hoặc xung đột hợp nhất, xác thực bản sửa và dùng đánh giá chéo chỉ đọc trước khi commit hoặc push thay đổi tiếp theo.',
    examplePrompt: 'Theo dõi an toàn phản hồi về pull request, xử lý bình luận đánh giá hoặc xung đột hợp nhất, xác thực bản sửa và dùng đánh giá chéo chỉ đọc trước khi commit hoặc push thay đổi tiếp theo.',
  },
  'redesign-existing-projects': {
    description: 'Nâng chất lượng trang web và ứng dụng hiện có lên mức cao cấp. Kiểm tra thiết kế hiện tại, nhận diện mẫu AI chung chung và áp dụng chuẩn thiết kế cao cấp mà không làm hỏng chức năng. Hoạt động với mọi framework CSS hoặc CSS thuần.',
    examplePrompt: 'Trước tiên kiểm tra UI hiện có, sau đó thiết kế lại với chất lượng cao cấp mà không làm hỏng chức năng, đồng thời giữ cấu trúc sản phẩm hữu ích.',
  },
  'reference-design-contract': {
    description: 'Biến gu thẩm mỹ mơ hồ, ảnh chụp màn hình, URL, ghi chú sản phẩm hoặc tham chiếu kiểu "làm cho giống thế này" thành DESIGN.md có cơ sở cùng tài liệu bàn giao triển khai. Dùng trước khi tạo nguyên mẫu, bài thuyết trình, thiết kế lại hoặc phối lại hình ảnh khi người dùng cần định hướng hình ảnh có thể tái sử dụng thay vì lời nhắc dùng một lần.',
    examplePrompt: 'Tạo hợp đồng thiết kế tham chiếu cho ứng dụng ghi chú dành cho nhà phát triển. Định hướng cần mang cảm giác biên tập, bình tĩnh, giàu xúc giác và nghiêm túc, không sao chép sản phẩm cụ thể nào. Tạo DESIGN.md và tài liệu bàn giao triển khai.',
  },
  'release-notes-one-pager': {
    description: 'Ghi chú phát hành trên một trang HTML với mục nổi bật, Đã thêm, Đã sửa, Thay đổi không tương thích, Vấn đề đã biết và Lưu ý cập nhật. Tạo rõ các mục theo kiểu "Không có" khi người dùng không cung cấp chi tiết.',
    examplePrompt: 'Viết ghi chú phát hành cho v2.3.1 với các mục Đã thêm, Đã sửa, Thay đổi không tương thích, Vấn đề đã biết và Lưu ý cập nhật.',
  },
  'remotion': {
    description: 'Tạo video theo chương trình bằng React. Hữu ích cho video giải thích có thương hiệu, video ngắn mạng xã hội, biến bảng điều khiển thành video và đồ họa chuyển động có thể tái tạo.',
    examplePrompt: 'Tạo video theo chương trình bằng React.',
  },
  'replicate': {
    description: 'Khám phá, so sánh và chạy mô hình AI bằng API Replicate. Lý tưởng cho quy trình tạo hình ảnh, âm thanh và video thường xuyên đổi mô hình.',
    examplePrompt: 'Khám phá, so sánh và chạy mô hình AI bằng API Replicate.',
  },
  'research-decision-room': {
    description: 'Biến ghi chú nghiên cứu người dùng lộn xộn, phỏng vấn, phiếu hỗ trợ, khảo sát và ngữ cảnh sản phẩm thành phòng ra quyết định dựa trên bằng chứng: một sản phẩm HTML duy nhất gồm sổ bằng chứng, bản đồ chủ đề, bản đồ nhiệt độ tin cậy, ma trận cơ hội, bản ghi nhớ quyết định và hàng đợi thử nghiệm. Dùng khi nhóm cần chuyển tín hiệu định tính thành quyết định sản phẩm hoặc thiết kế mà không khẳng định quá mức.',
    examplePrompt: 'Tổng hợp 8 ghi chú phỏng vấn, 24 phiếu hỗ trợ và số liệu kích hoạt gần đây thành phòng ra quyết định nghiên cứu để xác định ứng dụng quản lý dự án nên thêm danh sách kiểm tra làm quen hay gợi ý theo ngữ cảnh nội tuyến.',
  },
  'resume-modern': {
    description: 'Sơ yếu lý lịch hiện đại, tối giản trên một trang A4, sẵn sàng in hoặc xuất PDF.',
    examplePrompt: 'Dùng mẫu Modern Resume để chuyển nội dung của tôi thành sơ yếu lý lịch hiện đại, tối giản trên một trang A4, sẵn sàng in hoặc xuất PDF. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'screenshot': {
    description: 'Chụp màn hình máy tính, cửa sổ ứng dụng hoặc vùng pixel trên nhiều nền tảng hệ điều hành. Hữu ích cho ảnh tiếp thị, đánh giá thiết kế và báo cáo lỗi.',
    examplePrompt: 'Chụp màn hình máy tính, cửa sổ ứng dụng hoặc vùng pixel trên nhiều nền tảng hệ điều hành.',
  },
  'screenshots-marketing': {
    description: 'Tạo ảnh chụp màn hình tiếp thị bằng Playwright. Hữu ích cho ảnh chủ đạo trang đích, ảnh chụp App Store và hình ảnh nhật ký thay đổi.',
    examplePrompt: 'Tạo ảnh chụp màn hình tiếp thị bằng Playwright.',
  },
  'shadcn-ui': {
    description: 'Tạo thành phần UI bằng shadcn/ui. Kết hợp với vòng lặp thiết kế Stitch để nhanh chóng tạo thành phần có cấu trúc và dễ tiếp cận.',
    examplePrompt: 'Tạo thành phần UI bằng shadcn/ui.',
  },
  'shader-dev': {
    description: 'Kỹ thuật shader GLSL cho ray marching, mô phỏng chất lỏng, hệ hạt và tạo sinh theo quy tắc. Hữu ích cho hình ảnh chủ đạo và khung hình tĩnh chuyển động.',
    examplePrompt: 'Kỹ thuật shader GLSL cho ray marching, mô phỏng chất lỏng, hệ hạt và tạo sinh theo quy tắc.',
  },
  'slack-gif-creator': {
    description: 'Tạo GIF động được tối ưu cho Slack, có công cụ kiểm tra giới hạn kích thước và các nguyên thủy hoạt ảnh có thể kết hợp.',
    examplePrompt: 'Tạo GIF động được tối ưu cho Slack, có công cụ kiểm tra giới hạn kích thước và các nguyên thủy hoạt ảnh có thể kết hợp.',
  },
  'slides': {
    description: 'Tạo và chỉnh sửa bài thuyết trình .pptx bằng PptxGenJS. Hữu ích cho bộ trình chiếu bán hàng, bản mô tả khởi động và giới thiệu hệ thống thiết kế.',
    examplePrompt: 'Tạo và chỉnh sửa bài thuyết trình .pptx bằng PptxGenJS.',
  },
  'social-reddit-card': {
    description: 'Thẻ bài đăng Reddit chân thực với thanh bình chọn và số bình luận, phù hợp làm lớp phủ video hoặc chia sẻ story.',
    examplePrompt: 'Dùng mẫu Reddit Post Card để chuyển nội dung của tôi thành thẻ bài đăng Reddit chân thực với thanh bình chọn và số bình luận, dùng làm lớp phủ video hoặc chia sẻ story. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'social-spotify-card': {
    description: 'Thẻ phong cách Spotify Now Playing với ảnh bìa album, thanh tiến trình và điều khiển phát, phù hợp làm lớp phủ video hoặc trang chủ cá nhân.',
    examplePrompt: 'Dùng mẫu Spotify Now-Playing Card để chuyển nội dung của tôi thành thẻ phong cách Spotify Now Playing có ảnh bìa album, thanh tiến trình và điều khiển phát, dùng làm lớp phủ video hoặc trang chủ cá nhân. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'social-x-post-card': {
    description: 'Thẻ bài đăng X chân thực với chỉ số tương tác (lượt thích, đăng lại, lượt xem), phù hợp làm lớp phủ video hoặc thẻ ảnh có thể chia sẻ.',
    examplePrompt: 'Dùng mẫu X / Twitter Post Card để chuyển nội dung của tôi thành thẻ bài đăng X chân thực có chỉ số tương tác, dùng làm lớp phủ video hoặc thẻ ảnh có thể chia sẻ. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'high-end-visual-design': {
    description: 'Hướng dẫn AI thiết kế như một agency cao cấp. Xác định chính xác phông chữ, khoảng cách, bóng đổ, cấu trúc thẻ và hoạt ảnh giúp trang web trông đắt giá. Ngăn các thiết lập mặc định phổ biến khiến thiết kế AI trông rẻ tiền hoặc chung chung.',
    examplePrompt: 'Tạo trang đích cao cấp, tiết chế với kiểu chữ tinh tế, tương phản dịu, khoảng cách sang trọng, chiều sâu nhẹ và chuyển động có chừng mực.',
  },
  'sora': {
    description: 'Tạo, phối lại và quản lý video ngắn qua API Sora của OpenAI. Hữu ích cho cảnh quay điện ảnh, B-roll và lặp nhanh ý tưởng video.',
    examplePrompt: 'Tạo, phối lại và quản lý video ngắn qua API Sora của OpenAI.',
  },
  'speech': {
    description: 'Tạo âm thanh lời nói từ văn bản bằng API OpenAI với giọng tích hợp. Hữu ích cho phần giải thích có thuyết minh, âm thanh bài học và bản lồng tiếng nhanh.',
    examplePrompt: 'Tạo âm thanh lời nói từ văn bản bằng API OpenAI với giọng tích hợp.',
  },
  'stitch-loop': {
    description: 'Vòng phản hồi lặp từ thiết kế sang mã. Chu trình phê bình → chỉnh sửa → bàn giao giúp tăng độ trung thực hình ảnh giữa bản mô tả và UI đã triển khai.',
    examplePrompt: 'Vòng phản hồi lặp từ thiết kế sang mã.',
  },
  'stitch-design-taste': {
    description: 'Kỹ năng Semantic Design System cho Google Stitch. Tạo tệp DESIGN.md phù hợp với agent, áp dụng chuẩn UI cao cấp và tránh thiết kế chung chung — kiểu chữ nghiêm ngặt, màu sắc cân chỉnh, bố cục bất đối xứng, chuyển động vi mô liên tục và hiệu năng tăng tốc phần cứng.',
    examplePrompt: 'Tạo tệp DESIGN.md phù hợp với agent cho sản phẩm này, quy định chuẩn UI cao cấp khác biệt, kiểu chữ, màu sắc, bố cục, chuyển động và hướng dẫn lời nhắc.',
  },
  'swiftui-design': {
    description: 'Kỹ năng thiết kế frontend SwiftUI — quy tắc tránh AI-slop, cố vấn định hướng thiết kế, quy trình tài sản thương hiệu và đánh giá năm chiều. Hoạt động với Claude Code, Cursor, Codex và OpenCode.',
    examplePrompt: 'Kỹ năng thiết kế frontend SwiftUI — quy tắc tránh AI-slop, cố vấn định hướng thiết kế, quy trình tài sản thương hiệu và đánh giá năm chiều.',
  },
  'swiss-creative-mode-template': {
    description: 'Kỹ năng mẫu trình chiếu chế độ sáng tạo lấy cảm hứng Thụy Sĩ với kiểu chữ biên tập táo bạo, thẻ hình học tương phản cao, điều hướng slide tương tác, đổi chủ đề, lớp phủ điểm tương tác và phối màu trong một sản phẩm HTML duy nhất. Dùng khi người dùng muốn trang đích cao cấp kiểu trình chiếu, diện mạo bộ trình chiếu Thụy Sĩ/brutalist hoặc trang ra mắt sáng tạo có tương tác phong phú.',
    examplePrompt: 'Kỹ năng mẫu trình chiếu chế độ sáng tạo lấy cảm hứng Thụy Sĩ với kiểu chữ biên tập táo bạo, thẻ hình học tương phản cao, điều hướng slide tương tác, đổi chủ đề, lớp phủ điểm tương tác và phối màu trong một sản phẩm HTML duy nhất.',
  },
  'swiss-user-research-video-template': {
    description: 'Mẫu kể chuyện nghiên cứu người dùng phong cách Thụy Sĩ với thẩm mỹ biên tập tông giấy ấm. Dùng khi người dùng muốn bộ trình chiếu nghiên cứu cao cấp hoặc sản phẩm kể chuyện trực tiếp, có kiểu chữ tối giản, bố cục rõ ràng, chuyển động tinh tế, biểu đồ vòng và điều hướng slide bằng bàn phím/nhấp chuột trong một tệp HTML.',
    examplePrompt: 'Tạo bộ trình chiếu tổng hợp nghiên cứu người dùng phong cách Thụy Sĩ với kiểu chữ tối giản cao cấp, tông giấy ấm, biểu đồ vòng về người tham gia và tương tác biên tập tinh tế.',
  },
  'design-taste-frontend': {
    description: 'Kỹ năng frontend tránh thiết kế rập khuôn cho trang đích, portfolio và thiết kế lại. Agent đọc bản mô tả, suy ra hướng thiết kế phù hợp và tạo giao diện không giống dùng mẫu. Dùng hệ thống thiết kế thực khi phù hợp, kiểm tra trước khi thiết kế lại và áp dụng kiểm tra nghiêm ngặt trước triển khai.',
    examplePrompt: 'Tạo trang đích cao cấp theo design-taste-frontend: suy luận hướng thiết kế, thiết lập các tham số, tránh mẫu AI-slop và tạo sản phẩm HTML responsive được trau chuốt.',
  },
  'design-taste-frontend-v1': {
    description: 'Phiên bản gốc v1 của kỹ năng taste, được giữ lại cho dự án phụ thuộc vào hành vi chính xác của phiên bản này. Mặc định hiện tại là `design-taste-frontend` (v2 thử nghiệm), bản viết lại đáng kể. Chỉ dùng tên cài đặt v1 này khi cần tương thích ngược chính xác.',
    examplePrompt: 'Tạo trang tiếp thị được trau chuốt bằng design-taste-frontend-v1 với kiểu chữ, khoảng cách và chuyển động nổi bật cùng các rào chắn chống slop.',
  },
  'theme-factory': {
    description: 'Áp dụng chủ đề phông chữ và màu sắc chuyên nghiệp cho sản phẩm, gồm slide, tài liệu, báo cáo và trang đích HTML. Có 10 chủ đề đặt sẵn.',
    examplePrompt: 'Áp dụng chủ đề phông chữ và màu sắc chuyên nghiệp cho sản phẩm, gồm slide, tài liệu, báo cáo và trang đích HTML.',
  },
  'threejs': {
    description: 'Kỹ năng Three.js để tạo nội dung 3D và trải nghiệm tương tác trong trình duyệt — cảnh, vật liệu, điều khiển và hậu kỳ.',
    examplePrompt: 'Kỹ năng Three.js để tạo nội dung 3D và trải nghiệm tương tác trong trình duyệt — cảnh, vật liệu, điều khiển và hậu kỳ.',
  },
  'ui-skills': {
    description: 'Các ràng buộc có chủ đích và phát triển liên tục để hướng dẫn agent xây dựng giao diện. Hữu ích để giữ đầu ra nhất quán giữa nhiều thành phần UI nhỏ.',
    examplePrompt: 'Các ràng buộc có chủ đích và phát triển liên tục để hướng dẫn agent xây dựng giao diện.',
  },
  'ui-ux-pro-max': {
    description: 'Mục chỉ có trong danh mục UI/UX Pro Max. Các mẫu upstream đầy đủ, dữ liệu và quy trình nghiên cứu không có trong OpenDesign.',
    examplePrompt: 'Mục chỉ có trong danh mục UI/UX Pro Max.',
  },
  'venice-audio-music': {
    description: 'Điểm cuối để xếp hàng, truy xuất và hoàn tất tạo nhạc qua Venice.ai. Phù hợp cho nhạc hiệu ngắn, vòng lặp nhạc nền và nhạc phim nguyên mẫu.',
    examplePrompt: 'Điểm cuối để xếp hàng, truy xuất và hoàn tất tạo nhạc qua Venice.ai.',
  },
  'venice-audio-speech': {
    description: 'Mô hình chuyển văn bản thành giọng nói, giọng đọc, định dạng và phát trực tuyến qua Venice.ai. Hữu ích cho thuyết minh, lồng tiếng và giọng của agent hội thoại.',
    examplePrompt: 'Mô hình chuyển văn bản thành giọng nói, giọng đọc, định dạng và phát trực tuyến qua Venice.ai.',
  },
  'venice-image-edit': {
    description: 'Chỉnh sửa hình ảnh, phóng to và xóa nền qua API Venice.ai.',
    examplePrompt: 'Chỉnh sửa hình ảnh, phóng to và xóa nền qua API Venice.ai.',
  },
  'venice-image-generate': {
    description: 'Điểm cuối tạo ảnh và các phong cách khả dụng qua API Venice.ai.',
    examplePrompt: 'Điểm cuối tạo ảnh và các phong cách khả dụng qua API Venice.ai.',
  },
  'venice-video': {
    description: 'Quy trình tạo và chuyển lời nói thành văn bản cho video qua API Venice.ai.',
    examplePrompt: 'Quy trình tạo và chuyển lời nói thành văn bản cho video qua API Venice.ai.',
  },
  'vfx-text-cursor': {
    description: 'Vệt sáng con trỏ, tia màu và ánh sáng định hướng để hé lộ trích dẫn từng từ trong phần mở đầu video.',
    examplePrompt: 'Dùng mẫu VFX Text Cursor để chuyển nội dung của tôi thành phần hé lộ trích dẫn cho intro video với vệt sáng con trỏ, tia màu và ánh sáng định hướng. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'video-downloader': {
    description: 'Tải video từ YouTube và nền tảng khác để xem ngoại tuyến, biên tập hoặc lưu trữ, hỗ trợ nhiều định dạng và tùy chọn chất lượng.',
    examplePrompt: 'Tải video từ YouTube và nền tảng khác để xem ngoại tuyến, biên tập hoặc lưu trữ, hỗ trợ nhiều định dạng và tùy chọn chất lượng.',
  },
  'video-hyperframes': {
    description: 'Hoạt ảnh khung hình liên tục tương thích với Hyperframes / Remotion, hỗ trợ tự động phát.',
    examplePrompt: 'Dùng mẫu Hyperframes Video để chuyển nội dung của tôi thành hoạt ảnh khung hình liên tục tương thích với Hyperframes / Remotion, hỗ trợ tự động phát. Giữ dấu ấn hình ảnh của mẫu, dùng nội dung và dữ liệu thật, tránh lorem ipsum hoặc ảnh giữ chỗ.',
  },
  'web-artifacts-builder': {
    description: 'Tạo sản phẩm HTML phức tạp cho claude.ai bằng React và Tailwind. Quy trình tham khảo của Anthropic để cung cấp sản phẩm phong phú, có thể nhúng.',
    examplePrompt: 'Tạo sản phẩm HTML phức tạp cho claude.ai bằng React và Tailwind.',
  },
  'web-design-guidelines': {
    description: 'Hướng dẫn và tiêu chuẩn thiết kế web của nhóm kỹ thuật Vercel. Bao quát bố cục, kiểu chữ, màu sắc, chuyển động và khả năng tiếp cận cho UI sản phẩm.',
    examplePrompt: 'Hướng dẫn và tiêu chuẩn thiết kế web của nhóm kỹ thuật Vercel.',
  },
  'weread-year-in-review-video-template': {
    description: 'Mẫu video HyperFrames lấy cảm hứng từ WeRead cho báo cáo đọc sách hằng năm dạng dọc, bảng điều khiển đọc cá nhân, tóm tắt ghi chú sách và câu chuyện tổng kết năm có thể chia sẻ. Dùng khi người dùng muốn báo cáo đọc HTML-to-MP4 tỷ lệ 9:16 với chất liệu giấy ấm, kiểu chữ biên tập Trung Hoa, ẩn dụ trang sách, số liệu nổi bật và chuyển động có thể tái tạo.',
    examplePrompt: 'Tạo video báo cáo đọc sách hằng năm HyperFrames phong cách WeRead tỷ lệ 9:16 với 12 cảnh, chất liệu giấy ấm, chuyển cảnh lật trang sách, thống kê đọc, ghi chú, từ khóa và thẻ hồ sơ người đọc ở cuối.',
  },
  'wpds': {
    description: 'Hệ thống thiết kế WordPress. Áp dụng token thiết kế, kiểu chữ và mẫu thành phần chính thức của WordPress cho giao diện và trang web.',
    examplePrompt: 'Hệ thống thiết kế WordPress.',
  },
  'youtube-clipper': {
    description: 'Tạo và biên tập clip YouTube bằng quy trình tự động: nhập video nguồn, cắt đoạn nổi bật, thêm phụ đề và xuất video.',
    examplePrompt: 'Tạo và biên tập clip YouTube bằng quy trình tự động: nhập video nguồn, cắt đoạn nổi bật, thêm phụ đề và xuất video.',
  },
};

export const VI_DESIGN_SYSTEM_SUMMARIES: Record<string, string> = {
  'agentic': 'Giao diện hội thoại ưu tiên AI, với ít nút điều khiển, kết quả rõ ràng và luồng công việc giao cho agent xử lý.',
  'airbnb': 'Chợ du lịch với điểm nhấn san hô ấm áp, hình ảnh nổi bật và giao diện bo tròn.',
  'airtable': 'Kết hợp bảng tính và cơ sở dữ liệu. Thẩm mỹ dữ liệu nhiều màu sắc, thân thiện và có cấu trúc.',
  'ant': 'Hệ thống thiết kế có cấu trúc, hướng đến doanh nghiệp, chú trọng sự rõ ràng, nhất quán và hiệu quả cho ứng dụng web có mật độ dữ liệu cao.',
  'apple': 'Thiết bị điện tử tiêu dùng. Nhiều khoảng trắng cao cấp, SF Pro và hình ảnh đậm chất điện ảnh.',
  'application': 'Bảng điều khiển ứng dụng với giao diện tông tím, điều hướng trên cùng, bố cục dạng thẻ và quy trình ưu tiên nhà phát triển.',
  'arc': '"Trình duyệt thay bạn lướt web." Bề mặt trong mờ, sắc thái chuyển màu ấm và bố cục ưu tiên thanh bên.',
  'artistic': 'Phong cách giàu biểu cảm, tương phản cao, kiểu chữ sáng tạo và lựa chọn màu sắc táo bạo cho giao diện nổi bật.',
  'atelier-zero': 'Hệ thống studio biên tập: nền giấy ấm, tranh ghép thạch cao và kiến trúc siêu thực, kiểu chữ serif nghiêng làm tiêu đề, dấu mục bằng số La Mã và một điểm nhấn san hô — dành cho trang đích tạp chí, website studio và trang tuyên ngôn.',
  'bento': 'Bố cục lưới mô-đun với các khối dạng thẻ, thứ bậc rõ ràng, khoảng cách thoáng và tương phản nhẹ, tạo giao diện gọn gàng, dễ lướt.',
  'binance': 'Sàn giao dịch tiền mã hóa. Điểm nhấn vàng táo bạo trên nền đơn sắc, gợi không khí khẩn trương của sàn giao dịch.',
  'bmw': 'Xe hơi hạng sang. Bề mặt tối cao cấp, thẩm mỹ kỹ thuật chính xác kiểu Đức.',
  'bmw-m': 'Thương hiệu phụ dành cho hiệu suất đua xe. Bề mặt buồng lái gần như đen, điểm nhấn ba màu BMW M và hình khối kỹ thuật sắc nét.',
  'bold': 'Diện mạo nổi bật với kiểu chữ đậm, màu sắc tương phản cao và bố cục mạnh mẽ, đầy uy tín.',
  'brutalism': 'Thẩm mỹ thô mộc, phản thiết kế, lấy cảm hứng từ kiến trúc bê tông; dùng các yếu tố trần trụi, bố cục gai góc và chủ nghĩa tối giản thực dụng.',
  'bugatti': 'Thương hiệu siêu xe. Nền đen như rạp phim, phong cách đơn sắc khắc khổ và kiểu chữ tiêu đề đồ sộ.',
  'cafe': 'Giao diện lấy cảm hứng từ quán cà phê ấm cúng, với tông màu ấm, kiểu chữ mềm mại và bố cục gọn gàng cho trải nghiệm thư thái.',
  'cal': 'Lập lịch mã nguồn mở. Giao diện trung tính, gọn gàng và đơn giản, hướng đến nhà phát triển.',
  'canva': 'Nền tảng sáng tạo hình ảnh. Chuyển màu tím xanh sống động, khoảng cách rộng rãi và hình khối thân thiện.',
  'cisco': 'Thương hiệu hạ tầng doanh nghiệp. Bề mặt tối tạo cảm giác tin cậy, sắc xanh Cisco và sự rõ ràng về kỹ thuật.',
  'claude': 'Trợ lý AI của Anthropic. Điểm nhấn đất nung ấm áp, bố cục biên tập gọn gàng.',
  'clay': 'Công ty sáng tạo. Hình dạng hữu cơ, chuyển màu mềm mại và bố cục có định hướng nghệ thuật.',
  'claymorphism': 'Hình dạng mềm mại, bo tròn như vật thể 3D, mô phỏng đất sét dẻo với các yếu tố phồng vui nhộn và bề mặt nhiều màu sắc.',
  'clean': 'Thiết kế đề cao sự đơn giản, với nhiều khoảng trắng, kiểu chữ dễ đọc và bảng màu giới hạn để giảm nhiễu thị giác.',
  'clickhouse': 'Cơ sở dữ liệu phân tích tốc độ cao. Phong cách tài liệu kỹ thuật với điểm nhấn màu vàng.',
  'cloudflare-kumo': 'Hệ thống thành phần Cloudflare cho ứng dụng web hiện đại: token ngữ nghĩa cho sáng/tối, kiểu chữ Inter gọn, bề mặt trung tính nhiều lớp, điều khiển dễ tiếp cận và hướng dẫn màu cho biểu đồ.',
  'cohere': 'Nền tảng AI doanh nghiệp. Chuyển màu sống động, thẩm mỹ bảng điều khiển giàu dữ liệu.',
  'coinbase': 'Sàn giao dịch tiền mã hóa. Nhận diện xanh dương gọn gàng, tạo niềm tin và mang phong thái tổ chức.',
  'colorful': 'Bảng màu và chuyển sắc sống động, tương phản cao, tạo trải nghiệm cuốn hút, đáng nhớ và hiện đại.',
  'composio': 'Nền tảng tích hợp công cụ. Giao diện tối hiện đại với biểu tượng tích hợp nhiều màu sắc.',
  'contemporary': 'Thiết kế tối giản đương đại với lưới bento, hỗ trợ chế độ tối và bố cục dễ tiếp cận, hiệu năng cao.',
  'corporate': 'Thiết kế chuyên nghiệp, đồng bộ thương hiệu, với lưới có cấu trúc, bố cục tối giản và quy chuẩn doanh nghiệp nhất quán.',
  'cosmic': 'Thẩm mỹ khoa học viễn tưởng tương lai với tông tối, điểm nhấn neon rực rỡ và yếu tố không gian sống động.',
  'creative': 'Thiết kế vui nhộn, lấy nhân vật làm trung tâm, với kiểu chữ giàu biểu cảm và đồ họa táo bạo cho trang đích cùng dự án sáng tạo.',
  'cursor': 'Trình soạn thảo mã ưu tiên AI. Giao diện tối tinh tế với điểm nhấn chuyển sắc.',
  'dashboard': 'Thẩm mỹ nền tảng đám mây tông tối, với lưới mô-đun, bảng điều khiển như kính và thứ bậc dữ liệu rõ ràng cho bảng điều khiển năng suất.',
  'default': 'Phong cách mặc định gọn gàng, hướng đến sản phẩm, dành cho công cụ B2B, bảng điều khiển và trang tiện ích.',
  'discord': 'Nền tảng thoại và trò chuyện. Xanh tím đậm, bề mặt ưu tiên tông tối và điểm nhấn vui nhộn.',
  'dithered': 'Kỹ thuật dựng hình bằng mẫu chấm để mô phỏng chuyển sắc với bảng màu giới hạn, tạo hình ảnh hoài cổ, retro và tương phản cao.',
  'doodle': 'Phong cách vẽ tay như phác thảo, với nét nguệch ngoạc, phông chữ viết tay và đường nét không hoàn hảo, tạo cảm giác vui nhộn, thân mật.',
  'dramatic': 'Thiết kế sân khấu có độ tương phản cao, bố cục táo bạo, hình ảnh sống động và cách sắp đặt khác thường để thu hút ánh nhìn.',
  'duolingo': 'Nền tảng học ngôn ngữ. Màu xanh cú sáng, bóng đổ mạnh và niềm vui mang tính trò chơi hóa.',
  'editorial': 'Bố cục biên tập lấy cảm hứng từ tạp chí, với kiểu chữ serif tinh tế, lưới có cấu trúc và trải nghiệm đọc thanh lịch.',
  'elegant': 'Thẩm mỹ duyên dáng, tinh tế với kiểu chữ nhẹ nhàng, bảng màu tối giản và bố cục chỉn chu, toát lên vẻ sang trọng.',
  'elevenlabs': 'Nền tảng giọng nói AI. Giao diện tối đậm chất điện ảnh, lấy cảm hứng từ dạng sóng âm thanh.',
  'energetic': 'Phong cách năng động, rực rỡ với viền dày, hình khối hình học, màu sắc tương phản cao và kiểu chữ giàu biểu cảm, truyền tải chuyển động và sức sống.',
  'enterprise': 'Thiết kế doanh nghiệp gọn gàng, tương phản cao cho quy trình dựa trên dữ liệu, với thao tác kéo thả trực quan và bố cục có cấu trúc.',
  'expo': 'Nền tảng React Native. Chủ đề tối, khoảng cách chữ hẹp và phong cách tập trung vào mã nguồn.',
  'expressive': 'Thiết kế sống động, giàu cá tính với màu sắc táo bạo, đồ họa vui nhộn và bố cục năng động, cân bằng giữa sáng tạo và cấu trúc.',
  'fantasy': 'Thẩm mỹ kỳ ảo lấy cảm hứng từ trò chơi điện tử, với hình ảnh táo bạo, cao cấp, bảng màu phong phú và yếu tố chủ đề sống động.',
  'ferrari': 'Xe hơi hạng sang. Phong cách biên tập sáng tối, điểm nhấn Ferrari Red và nền đen đậm chất điện ảnh.',
  'figma': 'Công cụ thiết kế cộng tác. Nhiều màu sắc sống động, vui nhộn nhưng vẫn chuyên nghiệp.',
  'flat': 'Phong cách tối giản hai chiều với màu sắc rực rỡ, kiểu chữ gọn gàng và không dùng hiệu ứng 3D, tạo giao diện nhanh, trực quan.',
  'framer': 'Công cụ tạo trang web. Đen và xanh dương táo bạo, ưu tiên chuyển động và định hướng thiết kế.',
  'friendly': 'Thiết kế dễ tiếp cận, thân thiện với các yếu tố bo tròn, nhiều khoảng trắng và bảng màu pastel dịu nhẹ.',
  'futuristic': 'Thiết kế hướng tới tương lai với kiểu chữ lấy cảm hứng từ công nghệ, bố cục hiện đại và thẩm mỹ tinh tế, dẫn dắt bởi đổi mới.',
  'github': 'Nền tảng hướng đến mã nguồn. Mật độ công năng cao, sắc xanh chính xác trên nền trắng và nền tảng Primer.',
  'glassmorphism': 'Hiệu ứng kính mờ với các lớp trong mờ, độ nhòe nhẹ và viền phát sáng, tạo chiều sâu cùng vẻ hiện đại thanh lịch.',
  'gradient': 'Chuyển màu mượt mà và bề mặt giàu sắc độ, tạo giao diện hiện đại, vui nhộn với chiều sâu thị giác.',
  'hashicorp': 'Tự động hóa hạ tầng. Phong cách doanh nghiệp gọn gàng, đen trắng.',
  'hud': 'Màn hình hiển thị trước mặt phi công máy bay chiến đấu hoặc trực thăng. Xanh lân tinh trên nền gần như đen, lớp phủ dữ liệu viết hoa và hình khối góc cạnh. Rõ ràng tuyệt đối khi di chuyển nhanh ở độ cao lớn.',
  'huggingface': 'Trung tâm cộng đồng ML. Điểm nhấn vàng nắng, nhận diện đơn cách vui nhộn và dày đặc.',
  'ibm': 'Công nghệ doanh nghiệp. Hệ thống thiết kế Carbon, bảng màu xanh có cấu trúc.',
  'intercom': 'Nhắn tin với khách hàng. Bảng màu xanh thân thiện, quy chuẩn giao diện hội thoại.',
  'kami': 'Hệ thống biên tập trên giấy: nền giấy da ấm, điểm nhấn xanh mực và thứ bậc dẫn dắt bằng kiểu chữ serif. Phù hợp với sơ yếu lý lịch, tài liệu một trang, sách trắng, hồ sơ năng lực, bài thuyết trình — mọi nội dung cần có cảm giác như bản in chất lượng cao thay vì giao diện. Hỗ trợ đa ngôn ngữ.',
  'kraken': 'Giao dịch tiền mã hóa. Giao diện tối với điểm nhấn tím, bảng điều khiển giàu dữ liệu.',
  'lamborghini': 'Thương hiệu siêu xe. Bề mặt đen tuyền, điểm nhấn vàng và kiểu chữ in hoa đầy sức nặng.',
  'levels': 'Thiết kế hướng đến chuyển đổi, loại bỏ trở ngại và dẫn dắt người dùng hành động bằng sự rõ ràng, tin cậy và tốc độ.',
  'linear-app': 'Quản lý dự án. Cực tối giản, chính xác, điểm nhấn tím.',
  'lingo': 'Thiết kế vui nhộn, tối giản với màu sắc tươi sáng, hình dạng bo tròn, viền 3D có cảm giác chân thực và hình minh họa thân thiện cho giao diện dễ tiếp cận.',
  'loom': 'Video không đồng bộ của Loom. Tím chủ đạo, bề mặt thân thiện, bố cục lấy video làm trung tâm. Gọn gàng và chuyên nghiệp mà không mang vẻ tập đoàn.',
  'lovable': 'Công cụ xây dựng full-stack tích hợp AI. Chuyển màu vui nhộn, thẩm mỹ thân thiện với nhà phát triển.',
  'luxury': 'Thẩm mỹ tối cao cấp với tiêu đề táo bạo, bảng màu đơn sắc và cảm giác sang trọng cho trải nghiệm thương hiệu xa xỉ.',
  'mastercard': 'Mạng lưới thanh toán toàn cầu. Nền màu kem ấm, hình khối viên thuốc quỹ đạo và sắc thái biên tập thân thiện.',
  'material': 'Material Design của Google với bề mặt nhiều lớp, giao diện thích ứng theo chủ đề, chuyển động tích hợp và quy chuẩn đa nền tảng.',
  'meta': 'Cửa hàng công nghệ bán lẻ. Ưu tiên hình ảnh, bề mặt sáng/tối đan xen và nút kêu gọi hành động màu Meta Blue.',
  'minimal': 'Thiết kế tinh gọn, đề cao khoảng trắng, kiểu chữ gọn gàng và màu sắc tiết chế để tăng tối đa độ rõ ràng và tập trung.',
  'minimax': 'Nhà cung cấp mô hình AI. Giao diện tối táo bạo với điểm nhấn neon.',
  'mintlify': 'Nền tảng tài liệu. Gọn gàng, điểm nhấn xanh lá và tối ưu cho việc đọc.',
  'miro': 'Cộng tác trực quan. Điểm nhấn vàng rực rỡ, thẩm mỹ bảng vẽ vô hạn.',
  'mission-control': 'Theo dõi nhiệm vụ không gian và hàng không vũ trụ. Trung tâm chỉ huy tối, dữ liệu đo từ xa màu hổ phách, kiểu chữ đơn cách chính xác. Ưu tiên sự rõ ràng trong vận hành.',
  'mistral-ai': 'Nhà cung cấp LLM trọng số mở. Chủ nghĩa tối giản kỹ thuật kiểu Pháp, sắc tím.',
  'modern': 'Phong cách biên tập đương đại với kiểu chữ serif, bảng màu tối giản và bố cục gọn gàng cho sản phẩm số tinh tế.',
  'mongodb': 'Cơ sở dữ liệu tài liệu. Nhận diện lá xanh, tập trung vào tài liệu dành cho nhà phát triển.',
  'mono': 'Thiết kế lấy kiểu chữ đơn cách làm trung tâm, lấy cảm hứng từ Matrix, với yếu tố tương phản cao, mật độ gọn và thẩm mỹ hacker-chic.',
  'neobrutalism': 'Cách diễn giải hiện đại của chủ nghĩa thô mộc, với viền táo bạo, màu nhấn rực rỡ và bố cục thô tương phản cao trên bề mặt ấm.',
  'neon': 'Hiệu ứng phát sáng neon điện cùng các cặp màu tương phản cao, tạo giao diện táo bạo, bắt mắt.',
  'neumorphism': 'Thành phần giao diện mềm, nổi khối với bóng đổ trong và ngoài trên bề mặt đơn sắc, tạo cảm giác chân thực, lõm sâu.',
  'nike': 'Bán lẻ đồ thể thao. Giao diện đơn sắc, kiểu chữ in hoa khổng lồ và hình ảnh tràn trang.',
  'notion': 'Không gian làm việc tất cả trong một. Tối giản ấm áp, tiêu đề serif và bề mặt mềm mại.',
  'nvidia': 'Điện toán GPU. Năng lượng xanh lá và đen, thẩm mỹ mạnh mẽ về công nghệ.',
  'ollama': 'Chạy LLM cục bộ. Ưu tiên terminal, đơn giản đơn sắc.',
  'openai': 'Hệ thống tinh tế, gần như đơn sắc, lấy tông xanh mòng két pha đen làm điểm tựa, với nhiều khoảng trắng và kiểu chữ biên tập.',
  'opencode-ai': 'Nền tảng lập trình AI. Chủ đề tối dành cho nhà phát triển.',
  'pacman': 'Thiết kế lấy cảm hứng từ trò chơi điện tử thùng cổ điển, với phông chữ pixel, viền chấm, màu sắc vui nhộn tương phản cao và thẩm mỹ trò chơi 8-bit.',
  'paper': 'Thiết kế có chất liệu giấy, lấy cảm hứng từ in ấn, với màu sắc tiết chế, kiểu chữ serif/sans gọn gàng và bề mặt giàu cảm giác xúc giác.',
  'perplexity': 'Công cụ tìm kiếm AI dạng hội thoại. Nền tối sâu, kiểu chữ sắc nét, một điểm nhấn tím và thứ bậc thông tin dày đặc.',
  'perspective': 'Thiết kế có chiều sâu không gian, góc nhìn đẳng phối, điểm tụ và các lớp yếu tố dẫn dắt ánh nhìn bằng cảm giác chân thực như 3D.',
  'pinterest': 'Khám phá hình ảnh. Điểm nhấn đỏ, lưới xếp so le và ưu tiên hình ảnh.',
  'playstation': 'Bán lẻ máy chơi game. Bố cục dạng kênh trên ba lớp bề mặt, kiểu chữ tiêu đề kín đáo nhưng uy lực, hiệu ứng phóng to màu cyan khi rê chuột.',
  'posthog': 'Phân tích sản phẩm. Nhận diện vui nhộn với hình nhím, giao diện tối dành cho nhà phát triển.',
  'premium': 'Thẩm mỹ cao cấp lấy cảm hứng từ Apple, với khoảng cách chính xác, kiểu chữ hiện đại và ngôn ngữ hình ảnh tinh tế, chỉn chu.',
  'professional': 'Thiết kế chỉn chu, sẵn sàng cho môi trường kinh doanh, với kiểu chữ hiện đại, bố cục có cấu trúc và nhận diện đáng tin cậy.',
  'publication': 'Ngôn ngữ hình ảnh lấy cảm hứng từ sách in, tạp chí và báo cáo, với lưới biên tập và kiểu chữ giàu biểu cảm.',
  'raycast': 'Trình khởi chạy năng suất. Giao diện tối bóng bẩy, điểm nhấn chuyển sắc sống động.',
  'refined': 'Phong cách tối giản hiện đại, được tuyển chọn kỹ, với kiểu chữ serif thanh lịch và bảng màu trầm, tinh tế.',
  'renault': 'Xe hơi Pháp. Chuyển sắc cực quang sống động, kiểu chữ NouvelR và năng lượng mạnh mẽ.',
  'replicate': 'Chạy mô hình ML qua API. Nền trắng gọn gàng, hướng đến mã nguồn.',
  'resend': 'API email. Chủ đề tối gọn nhẹ, điểm nhấn đơn cách.',
  'retro': 'Thiết kế hoài cổ với kiểu chữ vintage, bảng màu retro tương phản cao và yếu tố thị giác gợi nhớ quá khứ.',
  'revolut': 'Ngân hàng số. Giao diện tối thanh lịch, thẻ chuyển sắc và độ chính xác fintech.',
  'runwayml': 'Tạo video bằng AI. Giao diện tối đậm chất điện ảnh, bố cục giàu nội dung đa phương tiện.',
  'sanity': 'CMS không đầu. Điểm nhấn đỏ, bố cục biên tập ưu tiên nội dung.',
  'sentry': 'Theo dõi lỗi. Bảng điều khiển tối, dày đặc dữ liệu, điểm nhấn hồng tím.',
  'shadcn': 'Thiết kế lấy cảm hứng từ Shadcn/ui với thành phần tối giản, gọn gàng, bảng màu đơn sắc và quy chuẩn ưu tiên tiện ích.',
  'shopify': 'Nền tảng thương mại điện tử. Phong cách điện ảnh ưu tiên tông tối, điểm nhấn xanh neon và kiểu chữ siêu mảnh.',
  'simple': 'Thiết kế trực tiếp, không cầu kỳ, với kiểu chữ gọn gàng, màu sắc trung tính và bố cục trực quan, không lấn át nội dung.',
  'skeumorphism': 'Mô phỏng thế giới thực bằng bề mặt có chất liệu, hiệu ứng 3D và ẩn dụ vật lý quen thuộc, tạo giao diện số trực quan.',
  'slack': 'Nền tảng giao tiếp nơi làm việc. Tím cà tím làm màu chủ đạo, bảng màu logo đa sắc, bề mặt sáng cùng thanh bên tối, ấm áp và thân thiện.',
  'sleek': 'Thẩm mỹ tối giản hiện đại với đường nét gọn gàng, bảng màu có chủ đích, tương tác tinh tế và khoảng cách nhất quán.',
  'spacex': 'Công nghệ không gian. Đen trắng sắc nét, hình ảnh tràn khung và vẻ hiện đại tương lai.',
  'spacious': 'Nhiều khoảng trắng, lề đệm nhất quán và bố cục theo lưới, tạo giao diện gọn gàng, dễ đọc, thoáng đãng.',
  'spotify': 'Nghe nhạc trực tuyến. Xanh lá rực rỡ trên nền tối, kiểu chữ mạnh mẽ và thiết kế dẫn dắt bởi bìa album.',
  'starbucks': 'Thương hiệu cà phê bán lẻ toàn cầu. Hệ thống bốn sắc xanh lá, nền kem ấm và nút dạng viên thuốc bo tròn hoàn toàn.',
  'storytelling': 'Thiết kế kể chuyện dùng hình ảnh, văn bản và tương tác để dẫn dắt người dùng qua hành trình cuốn hút, giàu cảm xúc.',
  'stripe': 'Hạ tầng thanh toán. Chuyển sắc tím đặc trưng, vẻ thanh lịch với độ đậm chữ 300.',
  'supabase': 'Giải pháp thay thế Firebase mã nguồn mở. Chủ đề xanh lục bảo tối, ưu tiên mã nguồn.',
  'superhuman': 'Ứng dụng email tốc độ cao. Giao diện tối cao cấp, ưu tiên thao tác bàn phím và ánh tím.',
  'tesla': 'Xe điện. Tối giản triệt để, hình ảnh tràn toàn khung nhìn và giao diện gần như vô hình.',
  'tetris': 'Thiết kế lấy cảm hứng từ trò chơi xếp hình kinh điển, với màu sắc vui nhộn, phông chữ tiêu đề mạnh mẽ và bố cục gọn, giàu năng lượng.',
  'theverge': 'Truyền thông biên tập về công nghệ. Điểm nhấn xanh axit và tím cực tím, kiểu chữ tiêu đề Manuka, các ô kể chuyện như tờ rơi rave.',
  'together-ai': 'Hạ tầng AI mã nguồn mở. Thiết kế kỹ thuật theo phong cách bản thiết kế.',
  'totality-festival': 'Hệ thống cao cấp mang sắc thái vũ trụ và kính lỏng, dùng chế độ tối để tái hiện cảm giác choáng ngợp trước nhật thực — bề mặt obsidian, phản chiếu "vầng hào quang" màu hổ phách và điểm nhấn cyan đầy không khí.',
  'trading-terminal': 'Terminal giao dịch tài chính kiểu Bloomberg. Chỉ dùng tông tối, dày đặc dữ liệu, tín hiệu mua/bán màu cyan/san hô. Có thể đọc lướt từ khoảng cách hai mét.',
  'uber': 'Nền tảng di chuyển. Đen trắng mạnh mẽ, kiểu chữ gọn và năng lượng đô thị.',
  'urdu': 'Trải nghiệm số ưu tiên tiếng Urdu, hỗ trợ RTL tự nhiên, kiểu chữ Nastaliq và sự hài hòa song ngữ.',
  'vercel': 'Triển khai giao diện. Đen trắng chính xác, phông chữ Geist.',
  'vibrant': 'Thiết kế sống động, nhiều màu sắc với kiểu chữ táo bạo, vui nhộn, điểm nhấn ấm và năng lượng thị giác linh hoạt.',
  'vintage': 'Hoài niệm từ thập niên 1950 đến 1990 với nét giả lập vật liệu, chất liệu hạt, bảng màu retro và kiểu chữ pixel.',
  'vodafone': 'Thương hiệu viễn thông toàn cầu. Kiểu chữ in hoa đồ sộ, dải phân mục màu Vodafone Red.',
  'voltagent': 'Khung làm việc cho agent AI. Nền canvas đen tuyền, điểm nhấn xanh lục bảo, hoạt động tự nhiên trong terminal.',
  'warm-editorial': 'Thẩm mỹ tạp chí lấy kiểu chữ serif làm chủ đạo. Điểm nhấn đất nung trên nền giấy màu ngà ấm — phù hợp với nội dung dài, bài biên tập và trang tiếp thị mang dấu ấn thương hiệu.',
  'warp': 'Terminal hiện đại. Giao diện tối như IDE, các lệnh được trình bày theo khối.',
  'webex': 'Nền tảng cộng tác. Kiểu chữ Momentum, hệ thống thao tác màu xanh và dải điểm nhấn đa người dùng.',
  'webflow': 'Công cụ trực quan để tạo trang web. Thẩm mỹ trang tiếp thị chỉn chu với điểm nhấn xanh dương.',
  'wechat': 'Ngôn ngữ hình ảnh thương hiệu dành cho Mini Program, tài khoản chính thức và các phần mở rộng của hệ sinh thái mở WeChat.',
  'wired': 'Tạp chí công nghệ. Mật độ dày như báo khổ rộng trên nền trắng, kiểu chữ serif tiêu đề tùy chỉnh, nhãn đơn cách và liên kết xanh màu mực.',
  'wise': 'Chuyển tiền. Điểm nhấn xanh lá tươi sáng, thân thiện và rõ ràng.',
  'x-ai': 'Phòng thí nghiệm AI của Elon Musk. Đơn sắc gọn gàng, tối giản tương lai.',
  'xiaohongshu': 'Nền tảng mạng xã hội UGC về phong cách sống. Màu đỏ thương hiệu đặc trưng, khoảng thở rộng và ưu tiên nội dung.',
  'zapier': 'Nền tảng tự động hóa. Cam ấm áp, thân thiện và lấy hình minh họa làm trung tâm.',
};

export const VI_DESIGN_SYSTEM_CATEGORIES: Record<string, string> = {
  'AI & LLM': 'AI và LLM',
  'Automotive': 'Ô tô',
  'Backend & Data': 'Backend và dữ liệu',
  'Bold & Expressive': 'Táo bạo và giàu biểu cảm',
  'Creative & Artistic': 'Sáng tạo và nghệ thuật',
  'Design & Creative': 'Thiết kế và sáng tạo',
  'Developer Tools': 'Công cụ dành cho nhà phát triển',
  'E-Commerce & Retail': 'Thương mại điện tử và bán lẻ',
  'Editorial & Print': 'Biên tập và in ấn',
  'Editorial / Personal / Publication': 'Biên tập / Cá nhân / Xuất bản',
  'Editorial · Studio': 'Biên tập · Studio',
  'Fintech & Crypto': 'Fintech và tiền mã hóa',
  'Layout & Structure': 'Bố cục và cấu trúc',
  'Media & Consumer': 'Truyền thông và tiêu dùng',
  'Modern & Minimal': 'Hiện đại và tối giản',
  'Morphism & Effects': 'Hiệu ứng hình thái',
  'Productivity & SaaS': 'Năng suất và SaaS',
  'Professional & Corporate': 'Chuyên nghiệp và doanh nghiệp',
  'Retro & Nostalgic': 'Retro và hoài cổ',
  'Social & Messaging': 'Mạng xã hội và nhắn tin',
  'Starter': 'Bắt đầu',
  'Themed & Unique': 'Theo chủ đề và độc đáo',
};

export const VI_PROMPT_TEMPLATE_CATEGORIES: Record<string, string> = {
  'Advertising': 'Quảng cáo',
  'Anime': 'Anime',
  'Anime / Manga': 'Anime / Manga',
  'App / Web Design': 'Thiết kế ứng dụng / web',
  'Branding': 'Xây dựng thương hiệu',
  'Cinematic': 'Điện ảnh',
  'Data': 'Dữ liệu',
  'Game UI': 'Giao diện trò chơi',
  'General': 'Chung',
  'Illustration': 'Minh họa',
  'Infographic': 'Đồ họa thông tin',
  'Live Artifact': 'Sản phẩm tương tác trực tiếp',
  'Marketing': 'Tiếp thị',
  'Motion Graphics': 'Đồ họa chuyển động',
  'Product': 'Sản phẩm',
  'Profile / Avatar': 'Hồ sơ / Ảnh đại diện',
  'Short Form': 'Nội dung ngắn',
  'Social / Meme': 'Mạng xã hội / Meme',
  'Social Media Post': 'Bài đăng mạng xã hội',
  'Travel': 'Du lịch',
  'VFX / Fantasy': 'Hiệu ứng hình ảnh / Kỳ ảo',
  'VFX / HTML-in-Canvas': 'Hiệu ứng hình ảnh / HTML-in-Canvas',
};

export const VI_PROMPT_TEMPLATE_TAGS: Record<string, string> = {
  '3d': '3D',
  '3d-render': 'dựng hình 3D',
  'action': 'hành động',
  'ancient-china': 'Trung Hoa cổ đại',
  'anime': 'anime',
  'app-showcase': 'giới thiệu ứng dụng',
  'archery': 'bắn cung',
  'arpg': 'ARPG',
  'audio-reactive': 'phản ứng theo âm thanh',
  'boss-fight': 'đấu trùm',
  'brand': 'thương hiệu',
  'branding': 'xây dựng thương hiệu',
  'captions': 'phụ đề',
  'cavalry': 'kỵ binh',
  'chart': 'biểu đồ',
  'childlike': 'ngây thơ',
  'choreography': 'vũ đạo',
  'cinematic': 'điện ảnh',
  'cinematic-romance': 'lãng mạn điện ảnh',
  'combat': 'chiến đấu',
  'combo': 'combo',
  'companion-to-image': 'đi kèm hình ảnh',
  'counter': 'bộ đếm',
  'crayon': 'bút sáp màu',
  'cyberpunk': 'cyberpunk',
  'dance': 'nhảy múa',
  'dashboard': 'bảng điều khiển',
  'data': 'dữ liệu',
  'data-viz': 'trực quan hóa dữ liệu',
  'destruction': 'phá hủy',
  'displacement': 'dịch chuyển',
  'editorial': 'biên tập',
  'elden-ring': 'Elden Ring',
  'endcard': 'thẻ kết thúc',
  'escort': 'hộ tống',
  'escort-mission': 'nhiệm vụ hộ tống',
  'fantasy': 'kỳ ảo',
  'fashion': 'thời trang',
  'fighting-game': 'trò chơi đối kháng',
  'food': 'ẩm thực',
  'game-cinematic': 'điện ảnh trò chơi',
  'game-ui': 'giao diện trò chơi',
  'grid-sheet': 'bảng lưới',
  'guanyu': 'Quan Vũ',
  'hand-drawn': 'vẽ tay',
  'hero': 'phần đầu trang',
  'html-in-canvas': 'HTML-in-Canvas',
  'hud': 'HUD',
  'hud-safe': 'vùng an toàn HUD',
  'hype': 'sôi động',
  'hyperframes': 'HyperFrames',
  'idol': 'thần tượng',
  'illustration': 'minh họa',
  'image-to-image': 'chuyển ảnh thành ảnh',
  'infographic': 'đồ họa thông tin',
  'iphone': 'iPhone',
  'japanese': 'Nhật Bản',
  'karaoke': 'karaoke',
  'key-visual': 'hình ảnh chủ đạo',
  'keynote': 'keynote',
  'kinetic-typography': 'kiểu chữ động',
  'linear-style': 'phong cách Linear',
  'liquid': 'chất lỏng',
  'liquid-glass': 'kính lỏng',
  'live-artifact': 'sản phẩm tương tác trực tiếp',
  'logo': 'logo',
  'lyubu': 'Lữ Bố',
  'macbook': 'MacBook',
  'magnetic': 'từ tính',
  'map': 'bản đồ',
  'marketing': 'tiếp thị',
  'minimal': 'tối giản',
  'mmo': 'MMO',
  'mobile': 'di động',
  'money': 'tiền',
  'mounted-combat': 'chiến đấu trên lưng ngựa',
  'nature': 'thiên nhiên',
  'open-world': 'thế giới mở',
  'otaku-dance': 'vũ đạo otaku',
  'outro': 'đoạn kết',
  'overlay': 'lớp phủ',
  'particles': 'hạt',
  'pipeline': 'quy trình',
  'portal': 'cổng không gian',
  'portrait': 'chân dung',
  'pose-reference': 'tham chiếu tư thế',
  'product': 'sản phẩm',
  'product-demo': 'bản demo sản phẩm',
  'product-promo': 'quảng bá sản phẩm',
  'rework': 'chỉnh sửa lại',
  'route': 'lộ trình',
  'saas': 'SaaS',
  'sequence': 'chuỗi cảnh',
  'shader': 'shader',
  'shatter': 'vỡ vụn',
  'sizzle': 'sizzle',
  'social': 'mạng xã hội',
  'storyboard': 'bảng phân cảnh',
  'street-fighter': 'Street Fighter',
  'style-transfer': 'chuyển đổi phong cách',
  'tekken': 'Tekken',
  'text': 'văn bản',
  'three-kingdoms': 'Tam Quốc',
  'tiktok': 'TikTok',
  'title-card': 'thẻ tiêu đề',
  'transform': 'biến đổi',
  'travel': 'du lịch',
  'tts': 'TTS',
  'typography': 'kiểu chữ',
  'unreal-engine-5': 'Unreal Engine 5',
  'vertical': 'dọc',
  'video-reference': 'video tham chiếu',
  'vs-screen': 'màn hình đối đầu',
  'webgl': 'WebGL',
  'website-to-video': 'chuyển trang web thành video',
  'wuxia': 'võ hiệp',
  'zhaoyun': 'Triệu Vân',
};

export const VI_PROMPT_TEMPLATE_COPY: Record<string, Partial<Pick<PromptTemplateSummary, 'summary' | 'title'>>> = {
  '3d-stone-staircase-evolution-infographic': {
    title: 'Đồ họa thông tin 3D về tiến hóa trên bậc thang đá',
    summary:
      'Biến dòng thời gian tiến hóa phẳng thành đồ họa thông tin 3D chân thực hình bậc thang đá, với hình ảnh sinh vật được dựng chi tiết và các bảng bên có cấu trúc.',
  },
  'anime-martial-arts-battle-illustration': {
    title: 'Minh họa trận chiến võ thuật phong cách anime',
    summary:
      'Tạo minh họa anime sống động, giàu sức hút về hai nhân vật nữ giao đấu trong võ đường truyền thống cùng hiệu ứng năng lượng nguyên tố.',
  },
  'e-commerce-live-stream-ui-mockup': {
    title: 'Bản mô phỏng giao diện phát trực tiếp thương mại điện tử',
    summary:
      'Tạo giao diện phát trực tiếp trên mạng xã hội chân thực phủ lên ảnh chân dung, có tin nhắn trò chuyện tùy chỉnh, cửa sổ quà tặng và thẻ mua sản phẩm.',
  },
  'game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin': {
    title: 'Ảnh chụp trò chơi — Đối kháng anime: Đội trưởng Ryuuga đấu với Kaze Renshin',
    summary:
      'Hình ảnh chủ đạo hoặc ảnh chụp cảnh chiến đấu trong trò chơi đối kháng, theo phong cách tranh mở đầu Street Fighter 6 hoặc Tekken 8. Hai chiến binh nam phong cách anime đối đầu giữa sân đền Trung Hoa về đêm đầy kịch tính: bên trái là tên cướp biển trần ngực đội mũ rơm, bao quanh bởi hào quang lửa đỏ cam ấm áp; bên phải là võ sĩ tóc nhọn mặc võ phục màu cam, tích tụ quả cầu năng lượng sét xanh khổng lồ. Có đầy đủ HUD trò chơi đối kháng (hai thanh máu, đồng hồ hiệp, khung chân dung P1/P2 với tên võ sĩ và huy hiệu, bộ đếm combo cùng thanh năng lượng tối đa ở mỗi bên). Tông màu chia đôi cam ấm và xanh lạnh theo quy ước hình ảnh của thể loại đối thủ. Tối ưu cho gpt-image-2 ở tỷ lệ 16:9.',
  },
  'game-screenshot-three-kingdoms-guanyu-slaying-yanliang': {
    title: 'Ảnh chụp trò chơi — ARPG Tam Quốc: Quan Vũ hạ gục Nhan Lương',
    summary:
      'Ảnh chụp trong trò chơi ARPG tái hiện cảnh Tam Quốc kinh điển: Quan Vũ cưỡi ngựa Xích Thố băng qua chiến trường dưới cơn mưa xối xả rồi xông vào tướng địch Nhan Lương. Hình ảnh theo phong cách điện ảnh chân thực của Black Myth: Wukong, Unreal Engine 5; camera bám đuổi góc nhìn thứ ba từ phía sau bên trái vị tướng cưỡi ngựa. HUD đấu trùm đầy đủ (chân dung, bản đồ nhỏ dày đặc điểm địch, thanh kỹ năng có gợi ý chiêu kết liễu, thanh HP trùm nổi phía trên tướng địch) biến cảnh này thành khoảnh khắc giao chiến ARPG AAA. Tối ưu cho gpt-image-2 ở tỷ lệ 16:9.',
  },
  'game-screenshot-three-kingdoms-lyubu-yuanmen-archery': {
    title: 'Ảnh chụp trò chơi — ARPG Tam Quốc: Lữ Bố bắn cung ở Viên Môn',
    summary:
      'Ảnh chụp trong trò chơi ARPG tái hiện cảnh Tam Quốc nổi tiếng: Lữ Bố bắn hạ cây kích ở xa tại cổng doanh trại để ngăn một trận chiến. Hình ảnh theo phong cách điện ảnh chân thực của Black Myth: Wukong, Unreal Engine 5 Nanite/Lumen; camera chơi góc nhìn thứ ba qua vai. Lớp phủ HUD đầy đủ trong trò chơi (thanh HP và khí, bản đồ nhỏ, thanh kỹ năng, chỉ báo khóa mục tiêu kèm khoảng cách đến cây kích ở xa) khiến ảnh trông như ảnh chụp gameplay ARPG thế hệ mới thay vì đoạn phim dựng sẵn. Tối ưu cho gpt-image-2 ở tỷ lệ 16:9.',
  },
  'game-screenshot-three-kingdoms-zhaoyun-cradle-escape': {
    title: 'Ảnh chụp trò chơi — ARPG Tam Quốc: Triệu Vân bế con thoát khỏi Trường Bản Pha',
    summary:
      'Ảnh chụp trong trò chơi ARPG tái hiện cảnh Tam Quốc huyền thoại: Triệu Vân ôm bé Lưu Thiện bằng một tay và dùng thương tay kia mở đường qua hàng ngũ địch tại Trường Bản Pha. Hình ảnh theo phong cách điện ảnh chân thực của Black Myth: Wukong kết hợp Elden Ring, Unreal Engine 5 với Nanite đầy đủ, ray tracing Lumen và tia sáng thể tích. Cảm xúc cốt lõi — một tay che chở đứa trẻ quấn tã, tay kia chiến đấu để sinh tồn — được nhấn mạnh bằng HUD đầy đủ, gồm thanh ESCORT riêng bảo vệ em bé, bộ đếm combo và số sát thương bật lên giữa không trung quanh kẻ địch bị đánh văng. Tối ưu cho gpt-image-2 ở tỷ lệ 16:9.',
  },
  'game-ui-ancient-china-open-world-mmo-hud': {
    title: 'Giao diện trò chơi — HUD MMO thế giới mở Trung Hoa cổ đại',
    summary:
      'Tạo bản mô phỏng ảnh chụp HUD trong trò chơi MMO thế giới mở AAA lấy bối cảnh Trung Hoa cổ đại, theo phong cách điện ảnh chân thực của Black Myth: Wukong. Nữ kiếm khách xinh đẹp làm điểm nhấn giữa khung hình, trong cảnh đền núi cổ phủ sương mù, xung quanh là HUD MMO đầy đủ: góc trên trái có chân dung nhân vật cùng thanh HP/MP/thể lực và biểu tượng hiệu ứng tăng cường; giữa phía dưới là thanh kỹ năng với biểu tượng thư pháp Trung Hoa; góc trên phải có bản đồ nhỏ và dấu nhiệm vụ; bên phải là bảng theo dõi nhiệm vụ; góc dưới trái có cửa sổ trò chuyện cuộn; trong thế giới trò chơi có nhãn NPC nổi và dấu chấm than nhiệm vụ. Dựng như ảnh chụp màn hình chân thực, tỷ lệ 16:9, phù hợp với bộ slide giới thiệu, hình ảnh chủ đạo kiểu gamescom và teaser trò chơi cho Xiaohongshu/bilibili.',
  },
  'illustrated-city-food-map': {
    title: 'Bản đồ ẩm thực thành phố minh họa',
    summary:
      'Tạo bản đồ du lịch vẽ tay theo phong cách màu nước với các món đặc sản địa phương được đánh số, địa danh nổi tiếng và chú giải.',
  },
  'illustration-crayon-kid-drawing-rework': {
    title: 'Minh họa — Chuyển thể tranh vẽ trẻ em bằng bút sáp màu',
    summary:
      'Lời nhắc chuyển đổi phong cách, biến bất kỳ ảnh tham chiếu nào (ảnh sản phẩm, ảnh chụp màn hình, chân dung, bản mô phỏng giao diện) thành tranh vẽ tay bằng bút sáp như thể do trẻ 10 tuổi vẽ. Thay bảng màu gốc bằng màu sáp tươi vui trên giấy trắng sạch, thêm các chi tiết giàu trí tưởng tượng của trẻ thơ — lâu đài, kẹo, sao, mây, cầu vồng — để tăng cảm giác hồn nhiên như sách tranh. Dùng như thao tác chuyển ảnh thành ảnh trong GPT-image-2 (cần tải ảnh tham chiếu lên cùng lời nhắc); đặc biệt phù hợp với ảnh chụp trang web, hình ảnh chủ đạo thương hiệu, ảnh sản phẩm và chân dung.',
  },
  'infographic-otaku-dance-choreography-breakdown-gokurakujodo-16-panels': {
    title: 'Đồ họa thông tin — Phân tích vũ đạo otaku Gokuraku Jodo (16 khung)',
    summary:
      'Một áp phích dọc tỷ lệ 2:3 được bố cục thành lưới 4×4 gồm 16 khung vuông liên kết, tạo thành bảng phân tích vũ đạo đầy đủ cho ca khúc nhảy otaku nổi tiếng của Nhật 極楽浄土 (Gokuraku Jodo). Mỗi khung thể hiện cùng một thần tượng anime bán hiện thực đáng yêu (tóc buộc hai bên màu hồng, đồng phục thần tượng học đường cổ thủy thủ) thực hiện một tư thế đặc trưng, toàn thân, trên nền hồng pastel; phía dưới có dải chú thích tiếng Nhật nhỏ và góc trên trái có vòng tròn đánh số. Được thiết kế rõ ràng như thẻ THAM CHIẾU TƯ THẾ để tạo video bằng AI — mỗi dáng người sắc nét, dễ nhận biết, không có đường chuyển động hay nền rối mắt. Tối ưu cho gpt-image-2, tỷ lệ 2:3. Danh mục: Đồ họa thông tin.',
  },
  'momotaro-explainer-slide-in-hybrid-style': {
    title: 'Slide giải thích Momotaro theo phong cách kết hợp',
    summary:
      'Lời nhắc kết hợp nét minh họa Irasutoya đơn giản, ấm áp với mật độ thông tin cao đặc trưng của slide chính phủ Nhật Bản.',
  },
  'notion-team-dashboard-live-artifact': {
    title: 'Bảng điều khiển nhóm phong cách Notion (sản phẩm tương tác trực tiếp)',
    summary:
      'Bản mô phỏng bảng điều khiển nhóm nguyên bản kiểu Notion trên một màn hình — lưới KPI, biểu đồ sparkline 7 ngày, luồng hoạt động và bảng tác vụ liên kết với cơ sở dữ liệu. Hình ảnh bổ trợ cho kỹ năng live-artifact; kết hợp với kỹ năng này để chạy có thể cập nhật hoặc dùng trình kết nối, hoặc dùng riêng như bản mô phỏng tĩnh.',
  },
  'profile-avatar-anime-girl-to-cinematic-photo': {
    title: 'Hồ sơ / Ảnh đại diện — Chuyển cô gái anime thành ảnh điện ảnh',
    summary:
      'Lời nhắc biến tranh tham chiếu nhân vật thành chân dung nội thất phong cách vintage chân thực, tông ấm, đồng thời giữ nguyên trang phục, tư thế và chú mèo ban đầu.',
  },
  'profile-avatar-casual-fashion-grid-photoshoot': {
    title: 'Hồ sơ / Ảnh đại diện — Bộ ảnh thời trang thường ngày dạng lưới',
    summary:
      'Lời nhắc JSON có cấu trúc để tạo ảnh ghép 4 khung về buổi chụp thời trang thường ngày, với thông số chi tiết về chủ thể và ánh sáng.',
  },
  'profile-avatar-cinematic-south-asian-male-portrait-with-vultures': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung điện ảnh nam giới Nam Á cùng kền kền',
    summary:
      'Chân dung điện ảnh chi tiết về một chàng trai Nam Á trong bối cảnh kỳ ảo đen tối, được bao quanh bởi kền kền và quạ.',
  },
  'profile-avatar-cyberpunk-anime-portrait-with-neon-face-text': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung anime cyberpunk với chữ neon trên mặt',
    summary:
      'Chân dung anime phong cách neon thanh lịch, phù hợp cho áp phích, hình ảnh mạng xã hội hoặc hình ảnh thương hiệu tương lai.',
  },
  'profile-avatar-elegant-fantasy-girl-in-violet-garden': {
    title: 'Hồ sơ / Ảnh đại diện — Cô gái kỳ ảo thanh lịch trong khu vườn tím',
    summary:
      'Tạo chân dung anime kỳ ảo chỉn chu về người phụ nữ thanh lịch với mái tóc óng mượt được tạo kiểu, trang phục tím đen lộng lẫy và khu vườn hoa huyền ảo — lý tưởng để thiết kế nhân vật.',
  },
  'profile-avatar-ethereal-blue-haired-fantasy-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung kỳ ảo tóc xanh thanh thoát',
    summary:
      'Lời nhắc tạo chân dung nhân vật anime kỳ ảo mềm mại, rạng rỡ, phù hợp làm hình ảnh chủ đạo dọc thanh lịch hoặc minh họa nhân vật với mái tóc bồng bềnh và không khí mùa xuân mộng mơ.',
  },
  'profile-avatar-glamorous-woman-in-black-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung người phụ nữ quyến rũ trong trang phục đen',
    summary:
      'Lời nhắc tạo chân dung chân thực phong cách xa xỉ về người phụ nữ thanh lịch mặc váy đen khoét sâu, phù hợp với ảnh biên tập thời trang hoặc hình ảnh làm đẹp.',
  },
  'profile-avatar-hyper-realistic-selfie-texture-prompts': {
    title: 'Hồ sơ / Ảnh đại diện — Lời nhắc tạo kết cấu ảnh selfie siêu chân thực',
    summary:
      'Các đoạn lời nhắc chi tiết để tạo kết cấu da chân thực và khung hình selfie điện thoại tự nhiên, chú trọng lỗ chân lông nhìn thấy được và ánh sáng tự nhiên.',
  },
  'profile-avatar-lavender-fantasy-mage-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung nữ pháp sư kỳ ảo màu oải hương',
    summary:
      'Lời nhắc tạo chân dung anime kỳ ảo chỉn chu về nàng công chúa pháp sư thanh lịch, tóc vàng óng, hoa tím và trang phục pha lê lộng lẫy — phù hợp với hình ảnh nhân vật hoặc minh họa phép thuật.',
  },
  'profile-avatar-monochrome-studio-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung đơn sắc trong studio',
    summary:
      'Lời nhắc nhiếp ảnh thương mại cao cấp cho chân dung đơn sắc với phông nền chia đôi đặc trưng và ánh sáng studio đầy kịch tính.',
  },
  'profile-avatar-old-photo-restoration-to-dslr-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Phục hồi ảnh cũ thành chân dung máy ảnh DSLR',
    summary:
      'Lời nhắc phục hồi ảnh gia đình cũ bị hư hại có 4 người thành chân dung chân thực, sắc nét, nhiều màu và độ phân giải cao, dùng để sửa và cải thiện ảnh.',
  },
  'profile-avatar-poetic-woman-in-garden-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung người phụ nữ yêu thơ trong vườn',
    summary:
      'Lời nhắc tạo chân dung chân thực theo phong cách biên tập về cô gái trẻ yêu sách trong khu vườn ngập nắng, phù hợp với nhiếp ảnh phong cách sống, thương hiệu văn học hoặc hình ảnh nhân vật thanh lịch.',
  },
  'profile-avatar-professional-identity-portrait-wallpaper': {
    title: 'Hồ sơ / Ảnh đại diện — Hình nền chân dung nhận diện chuyên nghiệp',
    summary:
      'Tạo hình nền cao cấp, độ phân giải cao, có chủ thể mặc trang phục công sở, hoạt động nghề nghiệp và văn bản.',
  },
  'profile-avatar-realistically-imperfect-ai-selfie': {
    title: 'Hồ sơ / Ảnh đại diện — Ảnh selfie AI không hoàn hảo như thật',
    summary:
      'Lời nhắc sáng tạo dùng với GPT Image 2 để tạo ảnh selfie "chụp hỏng" trông như khoảnh khắc vô tình, chất lượng thấp từ điện thoại.',
  },
  'profile-avatar-signed-marker-portrait-on-shikishi': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung ký tên bằng bút lông trên bảng shikishi',
    summary:
      'Tạo chân dung rực rỡ có chữ ký theo phong cách bút lông trên bảng shikishi vuông, phù hợp với chữ ký tranh người hâm mộ, bài đăng minh họa kỷ niệm và hình ảnh cảm ơn tùy chỉnh.',
  },
  'profile-avatar-snow-rabbit-empress-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung nữ hoàng thỏ tuyết',
    summary:
      'Lời nhắc tạo chân dung kỳ ảo chân thực về người phụ nữ quyền quý mang chủ đề thỏ, mặc hanfu mùa đông cầu kỳ và đứng trong ngôi đền trên núi phủ tuyết.',
  },
  'profile-avatar-snow-rabbit-mask-hanfu-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung hanfu đeo mặt nạ thỏ tuyết',
    summary:
      'Lời nhắc tạo chân dung kỳ ảo mùa đông đậm chất điện ảnh về người phụ nữ đeo mặt nạ, mặc hanfu trắng chủ đề thỏ; phù hợp với hình ảnh nhân vật thanh lịch và bộ sưu tập hình ảnh AI giàu không khí.',
  },
  'profile-avatar-snowy-rabbit-hanfu-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung hanfu thỏ phủ tuyết',
    summary:
      'Lời nhắc tạo chân dung mỹ nhân kỳ ảo siêu chi tiết về người phụ nữ có tai thỏ, mặc hanfu thêu; phù hợp với hình ảnh nhân vật thanh lịch, thiết kế trang phục hoặc bộ sưu tập chân dung AI đậm chất điện ảnh.',
  },
  'profile-avatar-snowy-rabbit-spirit-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung linh hồn thỏ tuyết',
    summary:
      'Lời nhắc tạo chân dung kỳ ảo thanh bình về người phụ nữ ẩn danh có tai thỏ giữa mùa đông, phù hợp với hình ảnh nhân vật giàu không khí và minh họa đại diện cách điệu.',
  },
  'profile-avatar-song-dynasty-hanfu-portrait': {
    title: 'Hồ sơ / Ảnh đại diện — Chân dung hanfu triều đại nhà Tống',
    summary:
      'Lời nhắc tối ưu để tạo chân dung chi tiết, chân thực về mỹ nhân mặc hanfu truyền thống thời Tống trong sân cổ.',
  },
  'social-media-post-anime-pokemon-shop-outfit-teaser-poster': {
    title: 'Bài đăng mạng xã hội — Áp phích teaser anime giới thiệu trang phục tại cửa hàng Pokémon',
    summary:
      'Lời nhắc tạo áp phích thông báo thời trang anime tông pastel dịu, với cô gái mặt mờ mặc váy xanh trong cửa hàng Pokémon; phù hợp để hé lộ trang phục và quảng bá nhân vật.',
  },
  'social-media-post-cinematic-elevator-scene': {
    title: 'Bài đăng mạng xã hội — Cảnh thang máy đậm chất điện ảnh',
    summary:
      'Lời nhắc tạo cảnh điện ảnh giàu không khí về người phụ nữ bên trong thang máy kim loại, với ánh sáng và phản chiếu chân thực.',
  },
  'social-media-post-confused-elf-girl-at-pastel-desk': {
    title: 'Bài đăng mạng xã hội — Cô gái elf bối rối bên bàn làm việc pastel',
    summary:
      'Lời nhắc tạo minh họa anime tông pastel dịu về cô gái elf gõ máy tính trong không gian làm việc kawaii ấm cúng, phù hợp với bài đăng mạng xã hội, hình nền hoặc tranh chủ đề streamer.',
  },
  'social-media-post-editorial-fashion-photography': {
    title: 'Bài đăng mạng xã hội — Ảnh thời trang biên tập',
    summary:
      'Lời nhắc giàu không khí, tập trung vào thời trang, cho cảnh studio tối giản với ánh sáng dịu và tông màu ấm.',
  },
  'social-media-post-fashion-editorial-collage': {
    title: 'Bài đăng mạng xã hội — Ảnh ghép thời trang biên tập',
    summary:
      'Lời nhắc chi tiết để tạo ảnh ghép thời trang biên tập 2×2, tập trung vào cách phối đồ nhất quán, ánh sáng cụ thể và đường nét khuôn mặt từ ảnh tham chiếu.',
  },
  'social-media-post-psg-transfer-announcement-poster': {
    title: 'Bài đăng mạng xã hội — Áp phích thông báo cầu thủ chuyển đến PSG',
    summary:
      'Áp phích chiêu mộ cầu thủ bóng đá táo bạo, chuyên nghiệp để công bố một cầu thủ gia nhập Paris Saint-Germain trên mạng xã hội hoặc đồ họa quảng bá thể thao.',
  },
  'social-media-post-sensational-girl-dance-storyboard-8-shots': {
    title: 'Bài đăng mạng xã hội — Bảng phân cảnh 8 cảnh nhảy ấn tượng của cô gái',
    summary:
      'Bộ lời nhắc đầy đủ cho bảng phân cảnh 8 cảnh, tạo chuỗi động tác nhảy nhất quán từng khung hình cho nhân vật thanh lịch. Bao gồm token phong cách toàn cục dùng chung, lời nhắc phủ định có thể tái sử dụng và tám lời nhắc theo cảnh (tư thế mở đầu, lắc hông, uốn người, xoay thân theo nhịp rơi, lắc hông sang bên, chuyển động tóc, tư thế mạnh mẽ, tư thế kết thúc). Tối ưu cho các mô hình cấp GPT-Image-2: từ ngữ ngắn gọn, không dùng cách diễn đạt nhạy cảm, ngôn ngữ khung hình và ánh sáng nhất quán giữa các cảnh để tạo cảm giác như một bài vũ đạo liền mạch.',
  },
  'social-media-post-showa-day-retro-culture-magazine-cover': {
    title: 'Bài đăng mạng xã hội — Bìa tạp chí văn hóa retro nhân Ngày Showa',
    summary:
      'Trang biên tập ấm áp giới thiệu một ngày lễ của Nhật Bản, kết hợp hình ảnh nhân vật anime, cảnh phố hoài niệm thời Showa và bố cục tạp chí giàu thông tin để quảng bá văn hóa theo mùa.',
  },
  'social-media-post-social-media-fashion-outfit-generation': {
    title: 'Bài đăng mạng xã hội — Tạo trang phục thời trang cho mạng xã hội',
    summary:
      'Lời nhắc tạo gợi ý phối trang phục phong cách blogger thời trang cho cả tuần dựa trên hồ sơ nhân vật, kèm nhãn và giá từng món đồ.',
  },
  'social-media-post-travel-snapshot-collage-prompt': {
    title: 'Bài đăng mạng xã hội — Lời nhắc tạo ảnh ghép khoảnh khắc du lịch',
    summary:
      'Lời nhắc chi tiết để tạo ảnh ghép hoài niệm gồm 12 khung ảnh du lịch phong cách chụp bằng điện thoại, ghi lại một chuyến đi một mình.',
  },
  'social-media-post-vintage-sign-painter-sketch': {
    title: 'Bài đăng mạng xã hội — Phác thảo kiểu họa sĩ vẽ biển hiệu vintage',
    summary:
      'Tạo bản phác thảo vẽ tay bằng bút lông trên giấy với chi tiết chân thực như nét chì và vết mực nhòe, hoàn hảo cho phong cách chữ vintage.',
  },
  'vr-headset-exploded-view-poster': {
    title: 'Áp phích mô tả các bộ phận bung tách của kính VR',
    summary:
      'Tạo sơ đồ công nghệ cao dạng bung tách của kính VR, kèm chú thích thành phần chi tiết và văn bản quảng bá.',
  },
  '3d-animated-boy-building-lego': {
    title: 'Cậu bé lắp LEGO trong hoạt hình 3D',
    summary:
      'Lời nhắc video hoạt hình 3D nhiều cảnh, mô tả cậu bé cẩn thận lắp các mảnh LEGO trong phòng, kèm hiệu ứng tua nhanh thời gian.',
  },
  'a-decade-of-refinement-glow-up': {
    title: 'Một thập kỷ đổi thay và trưởng thành',
    summary:
      'Lời nhắc biến đổi cho Seedance 2.0, thể hiện một người đàn ông chuyển từ khung cảnh đời thường năm 2016 sang lối sống xa hoa ở Dubai năm 2026, đồng thời giữ nhân vật nhất quán.',
  },
  'ancient-guardian-dragon-rescue': {
    title: 'Rồng hộ vệ cổ đại giải cứu',
    summary:
      'Lời nhắc điện ảnh nhiều cảnh, kể chuyện cô gái trong ngôi làng dưới mưa được giải cứu bởi con rồng xuất hiện; tập trung vào hiệu ứng hình ảnh và âm thanh giàu không khí.',
  },
  'ancient-indian-kingdom-fpv-video': {
    title: 'Video FPV về vương quốc Ấn Độ cổ đại',
    summary:
      'Lời nhắc điện ảnh nhịp độ nhanh theo phong cách drone FPV, khắc họa vương quốc Ấn Độ huyền bí với đền đài và rừng rậm.',
  },
  'animation-transfer-and-camera-tracking-prompt': {
    title: 'Lời nhắc chuyển hoạt ảnh và bám theo camera',
    summary:
      'Lời nhắc kỹ thuật cho Seedance 2.0, áp dụng tham chiếu chuyển động cụ thể lên nhân vật trong khi giữ camera bám theo cố định.',
  },
  'beat-synced-outfit-transformation-dance': {
    title: 'Điệu nhảy biến đổi trang phục đồng bộ theo nhịp',
    summary:
      'Lời nhắc cho Seedance 2.0, điều phối điệu nhảy của nhân vật theo các khung phân tích chuyển động, đồng thời đổi trang phục đúng nhịp.',
  },
  'character-intro-motion-graphics-sequence': {
    title: 'Chuỗi đồ họa chuyển động giới thiệu nhân vật',
    summary:
      'Lời nhắc đồ họa chuyển động nhiều giai đoạn, phức tạp để giới thiệu một nhóm nhân vật với lớp phủ giao diện và chuyển cảnh cụ thể, thiết kế cho mô hình Seedance 2.0.',
  },
  'cinematic-birthday-celebration-sequence': {
    title: 'Chuỗi cảnh mừng sinh nhật đậm chất điện ảnh',
    summary:
      'Lời nhắc video nhiều cảnh cực kỳ chi tiết cho chuỗi hoạt động mừng sinh nhật, tập trung vào tính nhất quán nhân vật và cách kể chuyện giàu cảm xúc.',
  },
  'cinematic-dragon-interaction-flight': {
    title: 'Tương tác và bay cùng rồng theo phong cách điện ảnh',
    summary:
      'Lời nhắc có cấu trúc như bảng phân cảnh, mô tả tương tác giàu cảm xúc giữa người phụ nữ và rồng, tiếp nối bằng chuỗi cảnh bay đậm chất điện ảnh.',
  },
  'cinematic-east-asian-woman-hand-dance': {
    title: 'Điệu múa tay điện ảnh của người phụ nữ Đông Á',
    summary:
      'Lời nhắc video điện ảnh nhiều cảnh cực kỳ chi tiết cho điệu múa tay cách điệu, kèm chỉ dẫn theo mốc thời gian về chuyển động camera và hành động nhân vật.',
  },
  'cinematic-emotional-face-close-up': {
    title: 'Cận cảnh gương mặt giàu cảm xúc theo phong cách điện ảnh',
    summary:
      'Lời nhắc kỹ thuật cực kỳ chi tiết cho Seedance 2.0, tập trung vào kết cấu da chân thực và chuỗi chuyển đổi biểu cảm phức tạp trên khuôn mặt.',
  },
  'cinematic-marine-biologist-exploration': {
    title: 'Nhà sinh vật biển khám phá đại dương theo phong cách điện ảnh',
    summary:
      'Lời nhắc video điện ảnh chi tiết về cảnh dưới nước, trong đó nhà sinh vật biển phát hiện xác tàu cổ trong rạn san hô.',
  },
  'cinematic-music-podcast-and-guitar-technique': {
    title: 'Podcast âm nhạc điện ảnh và kỹ thuật guitar',
    summary:
      'Lời nhắc điện ảnh nâng cao để tạo video podcast âm nhạc 4K, chú trọng kỹ thuật guitar, pinch harmonic và thẩm mỹ phòng thu.',
  },
  'cinematic-route-navigation-guide': {
    title: 'Hướng dẫn điều hướng lộ trình theo phong cách điện ảnh',
    summary:
      'Lời nhắc nhiều cảnh có cấu trúc cho Seedance, tạo video hướng dẫn đi bộ nhất quán với hướng dẫn viên du lịch xuất hiện xuyên suốt và chuyển cảnh mượt giữa các địa điểm đời thực.',
  },
  'cinematic-street-racing-sequence-for-seedance-2': {
    title: 'Chuỗi đua xe đường phố điện ảnh cho Seedance 2',
    summary:
      'Lời nhắc chi tiết nhiều góc máy cho cảnh đua xe đường phố ban đêm, tập trung vào sự tập trung cao độ của tay đua, chuyển động camera linh hoạt và những pha tăng tốc bùng nổ.',
  },
  'cinematic-vampire-alley-fight-sequence': {
    title: 'Cảnh ma cà rồng giao chiến trong hẻm theo phong cách điện ảnh',
    summary:
      'Lời nhắc hành động đầy đủ cho cảnh phim ngắn, với camera chuyển động linh hoạt và trận chiến tốc độ cao trong con hẻm rực ánh neon.',
  },
  'crimson-horizon-sci-fi-cinematic-sequence': {
    title: 'Chuỗi cảnh khoa học viễn tưởng điện ảnh Crimson Horizon',
    summary:
      'Chuỗi video điện ảnh hoàn chỉnh gồm 9 cảnh cho phim khoa học viễn tưởng mang tên "Crimson Horizon", kể từ lúc phóng tên lửa đến cuộc chạm trán ngoài hành tinh đáng sợ trên Sao Hỏa.',
  },
  'cyberpunk-game-trailer-script': {
    title: 'Kịch bản trailer trò chơi cyberpunk',
    summary:
      'Lời nhắc mở rộng để tạo video trailer trò chơi cyberpunk, mô tả thiết kế nhân vật, hoạt ảnh giao diện và chuyển cảnh môi trường từ khoảng không trắng đến khu ổ chuột.',
  },
  'forbidden-city-cat-satire': {
    title: 'Châm biếm mèo ở Tử Cấm Thành',
    summary:
      'Lời nhắc hài đen phức tạp cho Seedance 2.0, với một viên quan mèo cam và hoàng đế linh cẩu trong bối cảnh châm biếm triều Thanh.',
  },
  'hollywood-haute-couture-fantasy-video-prompt': {
    title: 'Lời nhắc video kỳ ảo thời trang cao cấp Hollywood',
    summary:
      'Lời nhắc video nhiều cảnh chi tiết cho Seedance 2.0, được thiết kế để tạo phim kỳ ảo thời trang cao cấp Hollywood. Lời nhắc chỉ định phong cách, độ phân giải (8K) và công cụ dựng hình (Unreal Engine).',
  },
  'hunched-character-animation': {
    title: 'Hoạt ảnh nhân vật đi khom lưng',
    summary:
      'Chỉ dẫn cho Seedance 2 để tạo hoạt ảnh nhân vật đi bộ tại chỗ dựa trên một hình tham chiếu nhân vật cụ thể.',
  },
  'hyperframes-html-in-canvas-iphone-device': {
    title: 'HyperFrames HTML-in-Canvas: Demo sản phẩm 3D iPhone + MacBook',
    summary:
      'Demo sản phẩm 15 giây với iPhone 15 Pro Max GLTF thật và MacBook Pro lơ lửng trên sân khấu gọn gàng; giao diện ứng dụng thật được dựng trực tiếp trên màn hình bằng drawElementImage. Hiệu ứng lóe sáng kính biến đổi cùng bàn xoay 360°. Dựng từ khối danh mục vfx-iphone-device.',
  },
  'hyperframes-html-in-canvas-text-cursor': {
    title: 'HyperFrames HTML-in-Canvas: Tiết lộ dòng chữ điện ảnh với con trỏ',
    summary:
      'Cảnh tiết lộ dòng chữ kịch tính dài 8 giây, với ánh sáng quanh con trỏ, tia bóng sắc độ và ánh sáng định hướng trên sân khấu đen. Kiểu chữ DOM thật qua xử lý hậu kỳ shader trực tiếp. Dựng từ khối danh mục vfx-text-cursor.',
  },
  'hyperframes-html-in-canvas-shatter': {
    title: 'HyperFrames HTML-in-Canvas: Đoạn kết kính vỡ',
    summary:
      'Đoạn kết HTML vỡ vụn dài 12 giây — trang sản phẩm hoặc thẻ giá thật khựng lại trong chốc lát rồi nổ tung thành mảnh kính khúc xạ, có độ sâu trường ảnh và tán sắc màu. Dựng từ khối danh mục vfx-shatter. Phù hợp làm thẻ kết thúc sau một bố cục dài hơn.',
  },
  'hyperframes-html-in-canvas-liquid-background': {
    title: 'HyperFrames HTML-in-Canvas: Phần đầu trang với nền chất lỏng',
    summary:
      'Cảnh đầu trang dài 12 giây với nội dung HTML lơ lửng trên bề mặt chất lỏng hữu cơ — mặt phẳng chia lưới với đỉnh bị dịch chuyển, sóng chuyển động theo thời gian thực, DOM được chụp và cuộn lên trên thật sắc nét, dễ đọc. Dựng từ khối danh mục vfx-liquid-background.',
  },
  'hyperframes-html-in-canvas-liquid-glass': {
    title: 'HyperFrames HTML-in-Canvas: Tiết lộ trang đích bằng kính lỏng',
    summary:
      'Cảnh tiết lộ trang đích sản phẩm thật theo phong cách kính lỏng Voronoi, dài 20 giây — DOM được chụp trực tiếp bằng drawElementImage, vỡ thành các ô kính khúc xạ rồi lắng lại thành khung hình đầu trang gọn gàng. Dựng từ khối danh mục vfx-liquid-glass.',
  },
  'hyperframes-html-in-canvas-magnetic': {
    title: 'HyperFrames HTML-in-Canvas: Trực quan hóa từ trường',
    summary:
      'Hình ảnh trực quan hóa hạt trong từ trường dài 15 giây, phản ứng với heatmap hoặc biểu đồ DOM trực tiếp — các hạt vẽ đường sức cong quanh HTML được chụp, lý tưởng cho sản phẩm ML/dữ liệu. Dựng từ khối danh mục vfx-magnetic.',
  },
  'hyperframes-html-in-canvas-portal-reveal': {
    title: 'HyperFrames HTML-in-Canvas: Bảng điều khiển hé lộ qua cổng không gian',
    summary:
      'Cổng không gian mở ra bảng điều khiển dữ liệu trực tiếp trong 10 giây — DOM được chụp theo thời gian thực, ánh sáng thể tích tràn ra và hạt xuất hiện ở rìa cổng. Dựng từ khối danh mục vfx-portal. Dành cho cảnh đầu trang dữ liệu kiểu keynote.',
  },
  'hyperframes-money-counter-hype': {
    title: 'HyperFrames: Bộ đếm tiền sôi động từ $0 → $10K (9:16)',
    summary:
      'Video HyperFrames dọc 1080×1920 dài 6 giây — bộ đếm kiểu Apple từ $0 → $10.000 với chớp sáng xanh, hạt tiền bùng nổ, biểu tượng chồng tiền mặt và dòng tiêu đề nhấn. Dựng từ khối danh mục HyperFrames `apple-money-count`.',
  },
  'hyperframes-app-showcase-three-phones': {
    title: 'HyperFrames: Video giới thiệu ứng dụng 12 giây — Ba điện thoại lơ lửng',
    summary:
      'Bố cục giới thiệu ứng dụng 16:9 dài 12 giây — ba màn hình iPhone lơ lửng trong không gian 3D, lần lượt xoay để giới thiệu các tính năng khác nhau, chú thích đồng bộ nhịp điệu và logo kết thúc. Dựng trực tiếp từ khối danh mục HyperFrames `app-showcase`.',
  },
  'hyperframes-brand-sizzle-reel': {
    title: 'HyperFrames: Video quảng bá thương hiệu sôi động dài 30 giây',
    summary:
      'Video HyperFrames 16:9 dài 30 giây — cắt cảnh nhanh, kiểu chữ động đồng bộ nhịp, tỷ lệ từ ngữ nổi bật phản ứng theo âm thanh, chuyển cảnh shader giữa năm cảnh và thẻ kết thúc với logo phát sáng. Phỏng theo mẫu aisoc-hype trong bộ công cụ học viên.',
  },
  'hyperframes-saas-product-promo-30s': {
    title: 'HyperFrames: Video quảng bá sản phẩm SaaS 30 giây (phong cách Linear)',
    summary:
      'Bố cục HyperFrames dài 30 giây, phỏng theo phim sản phẩm phong cách Linear/ClickUp — giao diện hé lộ 3D, kiểu chữ động đồng bộ nhịp, ảnh chụp giao diện có hoạt ảnh và thẻ kết thúc logo. Dựng từ các khối danh mục HF (ui-3d-reveal, app-showcase, logo-outro) cùng chuyển cảnh shader.',
  },
  'hyperframes-logo-outro-cinematic': {
    title: 'HyperFrames: Đoạn kết logo điện ảnh dài 4 giây',
    summary:
      'Đoạn kết logo 16:9 dài 4 giây — chữ thương hiệu ghép lại từng phần kèm ánh sáng bừng lên, vệt lấp lánh lướt qua logo cuối, lớp hạt mịn phủ nhẹ và một dòng nút kêu gọi hành động. Dựng từ các khối HyperFrames `logo-outro`, `shimmer-sweep` và `grain-overlay`.',
  },
  'hyperframes-product-reveal-minimal': {
    title: 'HyperFrames: Tiết lộ sản phẩm tối giản trong 5 giây',
    summary:
      'Bố cục HyperFrames dài 5 giây để hé lộ sản phẩm cao cấp — canvas tối, một điểm nhấn ấm, thẻ tiêu đề tiến gần chậm, dòng nhấn động và chuyển động tiết chế. Agent dựng MP4 từ HTML+GSAP qua puppeteer; không cần video có sẵn.',
  },
  'hyperframes-social-overlay-stack': {
    title: 'HyperFrames: Chồng lớp phủ mạng xã hội 9:16 (X · Reddit · Spotify · Instagram)',
    summary:
      'Bố cục HyperFrames dọc 1080×1920 dài 15 giây, xếp chồng bốn thẻ mạng xã hội có hoạt ảnh trên vòng lặp camera gương mặt — bài đăng trên X, phản hồi trên Reddit, thẻ đang phát trên Spotify và lời kêu gọi theo dõi Instagram ở cuối. Mỗi thẻ là một khối danh mục HyperFrames; điểm khác biệt nằm ở cách phối hợp chuyển động.',
  },
  'hyperframes-tiktok-karaoke-talking-head': {
    title: 'HyperFrames: Video người nói TikTok 9:16 với phụ đề karaoke',
    summary:
      'Video HyperFrames dọc 1080×1920 — người nói thuyết minh bằng TTS trên vòng lặp camera gương mặt, kèm phụ đề karaoke đồng bộ từng từ, lower third có hoạt ảnh và lớp phủ theo dõi ở cuối. Phỏng theo mẫu may-shorts-19 trong bộ công cụ học viên HyperFrames.',
  },
  'hyperframes-data-bar-chart-race': {
    title: 'HyperFrames: Cuộc đua biểu đồ thanh có hoạt ảnh (phong cách NYT)',
    summary:
      'Đồ họa thông tin 16:9 dài 12 giây — biểu đồ thanh và đường có hoạt ảnh, lần lượt hé lộ các danh mục, tiêu đề serif kiểu NYT, nguồn ở chú thích cuối trang và nhãn giá trị chuyển động. Dựng trực tiếp từ khối danh mục HyperFrames `data-chart`.',
  },
  'hyperframes-flight-map-route': {
    title: 'HyperFrames: Bản đồ đường bay phong cách Apple (Điểm đi → Điểm đến)',
    summary:
      'Bản đồ đường bay điện ảnh 16:9 dài 8 giây — phóng to địa hình chân thực, máy bay lướt theo đường cong từ điểm đi đến điểm đến, có nhãn thành phố và bộ đếm quãng đường động. Dựng trực tiếp từ khối danh mục HyperFrames `nyc-paris-flight`, có thể dùng cho mọi cặp thành phố.',
  },
  'hyperframes-website-to-video-promo': {
    title: 'HyperFrames: Quy trình chuyển trang web thành video (video tiếp thị 15 giây)',
    summary:
      'Bố cục HyperFrames 16:9 dài 15 giây, chụp trang web trực tiếp ở ba kích thước khung nhìn rồi chuyển động giữa các kích thước với hiệu ứng tách xuyên tâm nhiều màu. Phỏng theo mẫu hyperframes-sizzle trong bộ công cụ học viên, lấy chính trang web làm tư liệu nguồn.',
  },
  'live-action-anime-adaptation-water-vs-thunder-breathing-duel': {
    title: 'Chuyển thể anime live-action: Đối đầu Hơi thở của Nước và Hơi thở của Sấm',
    summary:
      'Lời nhắc cực kỳ chi tiết dài 15 giây để tạo bản chuyển thể live-action của trận đấu phong cách anime: "Hơi thở của Nước" (rồng nước xanh) đối đầu "Hơi thở của Sấm" (tia sét vàng).',
  },
  'luxury-supercar-cinematic-narrative': {
    title: 'Câu chuyện điện ảnh về siêu xe hạng sang',
    summary:
      'Lời nhắc điện ảnh nhiều góc máy cực kỳ chi tiết cho Seedance 2.0, với người đàn ông phong cách, những chú chó Doberman và siêu xe cổ trong khung cảnh núi non mờ sương.',
  },
  'magical-academy-storyboard-sequence': {
    title: 'Bảng phân cảnh về Học viện Phép thuật',
    summary:
      'Lời nhắc chi tiết theo phong cách bảng phân cảnh cho chuỗi cảnh điện ảnh về cô gái phép thuật trong học viện, bao gồm lúc đến nơi, khám phá sức mạnh và đấu phép.',
  },
  'modern-rural-aesthetics-healing-short-film-video-prompt': {
    title: 'Lời nhắc video phim ngắn chữa lành theo thẩm mỹ nông thôn hiện đại',
    summary:
      'Lời nhắc ba cảnh chi tiết cho Seedance 2.0, tạo phim ngắn điện ảnh chữa lành theo thẩm mỹ nông thôn hiện đại. Chỉ định phong cách (quảng cáo điện ảnh, 4K/8K, cận cảnh cực gần, ánh sáng tự nhiên), nhịp điệu và cách thể hiện giàu không khí.',
  },
  'nightclub-flyer-atmospheric-animation': {
    title: 'Hoạt ảnh giàu không khí cho tờ rơi hộp đêm',
    summary:
      'Lời nhắc hoạt ảnh tinh tế cho Seedance 2.0, làm nền và ánh sáng sống động hơn trong khi giữ chủ thể cố định.',
  },
  'retro-hk-wuxia-film-aesthetic': {
    title: 'Thẩm mỹ phim võ hiệp Hong Kong retro',
    summary:
      'Lời nhắc video nhiều phần phức tạp, tái hiện thẩm mỹ phim võ hiệp Hong Kong thập niên 1980–1990, với nhân vật biến hình từ mèo thành người qua các góc máy cách điệu.',
  },
  'seedance-2-0-15-second-cinematic-japanese-romance-short-film': {
    title: 'Seedance 2.0: Phim ngắn tình cảm Nhật Bản đậm chất điện ảnh dài 15 giây',
    summary:
      'Lời nhắc nhiều cảnh cực kỳ chi tiết dài 15 giây cho Seedance 2.0, tạo phim ngắn tình yêu tuổi học trò Nhật Bản siêu chân thực, đậm chất điện ảnh. Lời nhắc chỉ rõ bối cảnh, nhân vật, diễn biến và chuyển cảnh liền mạch.',
  },
  'seedance-2-0-80-year-old-rapper-mv': {
    title: 'Seedance 2.0: MV của nữ rapper 80 tuổi',
    summary:
      'Lời nhắc chi tiết dài 15 giây cho Seedance 2.0, tạo MV rap đường phố ngang tỷ lệ 16:9 với một phụ nữ 80 tuổi làm nhân vật chính. Chỉ định phong cách với tông neon tím/xanh lạnh, nhịp dựng và cách chuyển động camera.',
  },
  'sequence-and-movement-instruction-for-martial-arts-video': {
    title: 'Chỉ dẫn chuỗi động tác và chuyển động cho video võ thuật',
    summary:
      'Lời nhắc video cho Seedance 2.0, hướng dẫn mô hình tạo hoạt ảnh chuỗi động tác dựa trên bảng nhân vật, tập trung vào các chuyển động và bước chân cụ thể.',
  },
  'soul-switching-mirror-magic-sequence': {
    title: 'Chuỗi phép thuật hoán đổi linh hồn trước gương',
    summary:
      'Lời nhắc video kể chuyện về sự kiện hoán đổi linh hồn kỳ diệu trước gương, kèm chỉ dẫn camera cụ thể và gợi ý cảm xúc cho từng đoạn.',
  },
  'toaster-rocket-jumpscare': {
    title: 'Cảnh hù dọa với máy nướng bánh mì phóng tên lửa',
    summary:
      'Lời nhắc tạo khung hình kiểu video gia đình chân thực: một người lớn tuổi giật mình khi máy nướng bánh mì bắn lát bánh như tên lửa.',
  },
  'traditional-dance-performance': {
    title: 'Màn trình diễn múa truyền thống',
    summary:
      'Lời nhắc video hoàn chỉnh cho Seedance 2.0, tạo điệu múa truyền thống thanh lịch dựa trên vũ đạo và hình ảnh tham chiếu nhận dạng.',
  },
  'video-seedance-three-kingdoms-guanyu-slaying-yanliang': {
    title: 'Video — ARPG Tam Quốc — Quan Vũ hạ Nhan Lương (Seedance 2.0)',
    summary:
      'Chuỗi hành động điện ảnh dựng trong game dài khoảng 10 giây, đưa mẫu ảnh đi kèm game-screenshot-three-kingdoms-guanyu-slaying-yanliang vào chuyển động. Quan Vũ (关羽) cưỡi ngựa Xích Thố xông thẳng vào đội hình địch, giơ Thanh Long Yển Nguyệt Đao và tung một nhát chém gọn vào tướng địch Nhan Lương. Tối ưu cho Seedance 2.0 — camera bám sát, một đòn quyết định, vật lý ngựa và đao mượt, ánh sáng chân thực như ảnh chụp, tuyệt đối không có cảnh máu me trên màn hình (đòn đánh được gợi bằng ánh lóe khí vàng, không có máu). Được thiết kế làm video đi kèm trực tiếp với mẫu ảnh tương ứng để có thể phân phối ảnh tĩnh và clip theo cặp. Ảnh tham chiếu: ảnh chụp mẫu Quan Vũ hạ Nhan Lương.',
  },
  'video-seedance-three-kingdoms-lyubu-yuanmen-archery': {
    title: 'Video — ARPG Tam Quốc — Lữ Bố bắn cung ở cổng doanh trại (Seedance 2.0)',
    summary:
      'Chuỗi hành động điện ảnh dựng trong game dài khoảng 10 giây, đưa mẫu ảnh đi kèm game-screenshot-three-kingdoms-lyubu-yuanmen-archery vào chuyển động. Lữ Bố (吕布) đứng giữa doanh trại bụi mù, hai đội quân đối đầu; chàng giương cây cung dài sơn đỏ, giữ dây với mũi tên đã lắp rồi bắn một mũi tên vàng rực thấm khí xuyên qua chiến trường về phía cây kích cắm dưới đất ở xa. Tối ưu cho Seedance 2.0 — camera bám sát, một nhịp hành động quyết định, khung hình rõ và an toàn cho HUD, vật lý cung/tên mượt, gió, bụi và cờ chuyển động cùng màu sắc như ảnh chụp trong game. Được thiết kế làm video đi kèm trực tiếp với mẫu ảnh tương ứng để có thể phân phối ảnh tĩnh và clip theo cặp. Ảnh tham chiếu: ảnh chụp mẫu Lữ Bố bắn cung ở cổng doanh trại.',
  },
  'video-seedance-three-kingdoms-zhaoyun-cradle-escape': {
    title: 'Video — ARPG Tam Quốc — Triệu Vân bế con thoát hiểm (Seedance 2.0)',
    summary:
      'Chuỗi hành động điện ảnh dựng trong game dài khoảng 12 giây, đưa mẫu ảnh đi kèm game-screenshot-three-kingdoms-zhaoyun-cradle-escape vào chuyển động. Triệu Vân cưỡi ngựa băng qua chiến trường Trường Bản tan hoang, tay trái ôm người thừa kế sơ sinh A Đẩu, tay phải cầm thương; chặn đòn đang lao tới bằng một cú NÉ HOÀN HẢO rồi vượt qua xe chiến bị lật để mở đường. Tối ưu cho Seedance 2.0 — camera bám sát, một nhịp hành động liên tục, thao tác thương một tay đáng tin, vật lý ngựa mượt và tuyệt đối không để em bé bị thương. Được thiết kế làm video đi kèm trực tiếp với mẫu ảnh tương ứng để có thể phân phối ảnh tĩnh và clip theo cặp. Ảnh tham chiếu: ảnh chụp mẫu Triệu Vân bế con thoát hiểm.',
  },
  'vintage-disney-style-pirate-crocodile-animation': {
    title: 'Hoạt ảnh cá sấu cướp biển phong cách Disney vintage',
    summary:
      'Lời nhắc kể chuyện nhiều cảnh cho phim hoạt hình cổ điển phong cách Disney vintage, với cá sấu cướp biển và những chú chim cướp biển trên tàu.',
  },
  'viral-k-pop-dance-choreography': {
    title: 'Vũ đạo K-pop lan truyền',
    summary:
      'Lời nhắc chi tiết cho Seedance 2.0, tạo hoạt ảnh nhân vật thực hiện điệu nhảy dựa trên bảng phân cảnh tham chiếu 16 khung.',
  },
  'wasteland-factory-chase': {
    title: 'Cuộc rượt đuổi tại nhà máy vùng đất hoang',
    summary:
      'Lời nhắc điện ảnh cho cảnh tốc độ cao trên vùng hoang mạc cằn cỗi, với nhà máy công nghiệp di động trên những chiếc chân và cuộc truy đuổi bằng mô tô nổi loạn.',
  },
};
