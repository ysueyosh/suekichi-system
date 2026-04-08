"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Paper,
  Stack,
  CircularProgress,
  useTheme,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type FormStep = "input" | "confirm" | "complete";

type InquiryType =
  | "dev_web_system"
  | "dev_website"
  | "dev_app"
  | "ai_solution"
  | "consultation"
  | "other";

interface FormData {
  type: "company" | "individual";
  companyName: string;
  name: string;
  email: string;
  phoneNumber: string;
  inquiryType: InquiryType | "";
  content: string;
}

export const ContactForm = () => {
  const theme = useTheme();
  const [step, setStep] = useState<FormStep>("input");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: "company",
    companyName: "",
    name: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    content: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // エラークリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleChangeRadio = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.type === "company" && !formData.companyName) {
      newErrors.companyName = "会社名を入力してください";
    }
    if (!formData.name) newErrors.name = "担当者名を入力してください";
    if (!formData.email) newErrors.email = "メールアドレスを入力してください";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "正しいメールアドレス形式で入力してください";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "電話番号を入力してください";
    else if (!/^[0-9-+\s()]+$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "電話番号は数字とハイフン等で入力してください";

    if (!formData.inquiryType)
      newErrors.inquiryType = "お問い合わせ種別を選択してください";
    if (!formData.content)
      newErrors.content = "お問い合わせ内容を入力してください";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep("confirm");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep("input");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Dummy implementation: Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("complete");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 入力画面
  if (step === "input") {
    return (
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 8,
            border: `1px solid ${theme.palette.divider}`,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Box mb={6} textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "var(--font-senobi-gothic)" }}
            >
              お問い合わせフォーム
            </Typography>
            <Typography variant="body2" color="text.secondary">
              以下のフォームに必要事項をご入力ください。
              <br />
              通常、1〜2営業日以内にご連絡いたします。
            </Typography>
          </Box>

          <Stack spacing={4}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{ mb: 1, fontWeight: "bold", fontSize: "0.9rem" }}
              >
                お問い合わせの種類
              </FormLabel>
              <RadioGroup
                row
                aria-label="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="company"
                  control={<Radio />}
                  label="法人"
                />
                <FormControlLabel
                  value="individual"
                  control={<Radio />}
                  label="個人"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              fullWidth
              label={formData.type === "company" ? "会社名" : "屋号（任意）"}
              name="companyName"
              placeholder={
                formData.type === "company"
                  ? "株式会社スエキチシステム"
                  : "スエキチ商店"
              }
              value={formData.companyName}
              onChange={handleChange}
              error={!!errors.companyName}
              helperText={errors.companyName}
              required={formData.type === "company"}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              fullWidth
              label="担当者名"
              name="name"
              placeholder="例：山田 太郎"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              fullWidth
              label="担当者電話番号"
              name="phoneNumber"
              type="tel"
              placeholder="例：03-1234-5678"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              fullWidth
              label="メールアドレス"
              name="email"
              type="email"
              placeholder="例：info@example.com"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              InputLabelProps={{ shrink: true }}
            />

            <FormControl component="fieldset" error={!!errors.inquiryType}>
              <FormLabel
                component="legend"
                sx={{ mb: 1, fontWeight: "bold", fontSize: "0.9rem" }}
              >
                お問い合わせ種別
              </FormLabel>
              <RadioGroup
                aria-label="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="dev_web_system"
                  control={<Radio />}
                  label="Webシステム開発"
                />
                <FormControlLabel
                  value="dev_website"
                  control={<Radio />}
                  label="Webサイト制作"
                />
                <FormControlLabel
                  value="dev_app"
                  control={<Radio />}
                  label="モバイルアプリ開発"
                />
                <FormControlLabel
                  value="ai_solution"
                  control={<Radio />}
                  label="AIソリューション"
                />
                <FormControlLabel
                  value="consultation"
                  control={<Radio />}
                  label="技術相談・コンサルティング"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="その他"
                />
              </RadioGroup>
              {errors.inquiryType && (
                <Typography color="error" variant="caption">
                  {errors.inquiryType}
                </Typography>
              )}
            </FormControl>

            <TextField
              fullWidth
              label="お問い合わせ内容"
              name="content"
              multiline
              minRows={6}
              placeholder="ご依頼内容やご相談など、自由にご記入ください。"
              value={formData.content}
              onChange={handleChange}
              error={!!errors.content}
              helperText={errors.content}
              InputLabelProps={{ shrink: true }}
            />

            <Box textAlign="center" mt={4}>
              <Button
                variant="contained"
                size="large"
                onClick={handleNext}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 50,
                  fontWeight: "bold",
                  fontFamily: "var(--font-senobi-gothic)",
                  fontSize: "1.1rem",
                }}
              >
                確認画面へ
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    );
  }

  const getInquiryTypeLabel = (type: InquiryType | "") => {
    switch (type) {
      case "dev_web_system":
        return "Webシステム開発";
      case "dev_website":
        return "Webサイト制作";
      case "dev_app":
        return "モバイルアプリ開発";
      case "ai_solution":
        return "AIソリューション";
      case "consultation":
        return "技術相談・コンサルティング";
      case "other":
        return "その他";
      default:
        return "";
    }
  };

  // 確認画面
  if (step === "confirm") {
    return (
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 8,
            border: `1px solid ${theme.palette.divider}`,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Box mb={6} textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontFamily: "var(--font-senobi-gothic)" }}
            >
              入力内容の確認
            </Typography>
            <Typography variant="body2" color="text.secondary">
              以下の内容で送信します。よろしければ「送信する」ボタンを押してください。
            </Typography>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              p: 4,
              mb: 6,
              borderRadius: 4,
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "#f9f9f9",
            }}
          >
            <Stack spacing={3}>
              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    お問い合わせの種類
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography variant="body1">
                    {formData.type === "company" ? "法人" : "個人"}
                  </Typography>
                </Box>
              </Box>

              {formData.companyName && (
                <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                  <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      {formData.type === "company" ? "会社名" : "屋号"}
                    </Typography>
                  </Box>
                  <Box width={{ xs: "100%", sm: "65%" }}>
                    <Typography variant="body1">
                      {formData.companyName}
                    </Typography>
                  </Box>
                </Box>
              )}

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    担当者名
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography variant="body1">{formData.name}</Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    担当者電話番号
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography variant="body1">
                    {formData.phoneNumber}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    メールアドレス
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography variant="body1">{formData.email}</Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    お問い合わせ種別
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography variant="body1">
                    {getInquiryTypeLabel(formData.inquiryType)}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Box width={{ xs: "100%", sm: "35%" }} mb={{ xs: 1, sm: 0 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    お問い合わせ内容
                  </Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "65%" }}>
                  <Typography
                    variant="body1"
                    sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  >
                    {formData.content}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Paper>

          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              size="large"
              onClick={handleBack}
              startIcon={<ArrowBackIcon />}
              disabled={loading}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 50,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              戻る
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={loading}
              endIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: 50,
                fontWeight: "bold",
                fontFamily: "var(--font-senobi-gothic)",
                fontSize: "1.1rem",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {loading ? "送信中..." : "送信する"}
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  // 完了画面
  return (
    <Container maxWidth="md">
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 8 },
          borderRadius: 8,
          border: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "success.light",
            color: "success.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 4,
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: "var(--font-senobi-gothic)" }}
        >
          お問い合わせありがとうございます
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          お問い合わせ内容を受け付けました。
          <br />
          スエキチより順次ご連絡させていただきますので、今しばらくお待ちください。
        </Typography>

        <Alert
          severity="warning"
          icon={<WarningAmberIcon fontSize="inherit" />}
          sx={{
            textAlign: "left",
            mb: 6,
            borderRadius: 4,
            width: "fit-content",
            mx: "auto",
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            自動返信メールが届かない場合
          </Typography>
          <Typography variant="body2">
            数分以内に自動返信メールが届かない場合は、以下の可能性があります。
            <br />
            ・迷惑メールフォルダに振り分けられている
            <br />
            ・ご入力いただいたメールアドレスに誤りがある
            <br />
            お手数ですが、メール設定をご確認の上、再度お問い合わせください。
          </Typography>
        </Alert>

        <Button
          variant="contained"
          size="large"
          href="/"
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: 50,
            fontWeight: "bold",
            fontFamily: "var(--font-senobi-gothic)",
          }}
        >
          トップページへ戻る
        </Button>
      </Paper>
    </Container>
  );
};
